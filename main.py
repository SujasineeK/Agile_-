from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException, Request
import database
from fastapi.responses import JSONResponse
from datetime import datetime
from jinja2 import Environment, FileSystemLoader
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles


app = FastAPI()
env = Environment(loader=FileSystemLoader(""))
templates = Jinja2Templates(env=env)
app.mount("/static", StaticFiles(directory="static"), name="static")


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "null" 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    app.state.mysql_pool = await database.get_mysql_pool()

@app.on_event("shutdown")
async def shutdown_event():
    await database.close_mysql_pool(app.state.mysql_pool)


@app.post("/request_list_create")
async def create_request(request_data: dict):
    print(request_data)
    current_datetime = datetime.now()
    current_date = current_datetime.date()
    current_time = current_datetime.time()

    try:
        async with app.state.mysql_pool.acquire() as connection:
            async with connection.cursor() as cursor:
                sql = "INSERT INTO request_list (student_name, student_id, email, mobile_number, current_track, new_track, status, reason, created_date, created_time) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                await cursor.execute(sql, (
                    request_data["student_name"],
                    request_data["student_id"],
                    request_data["email"],
                    request_data["mobile_number"],
                    request_data["current_track"],
                    request_data["new_track"],
                    "pending",  
                    request_data["reason"],
                    current_date,
                    current_time
                ))
                return {"message": "Request created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/testcreate")
async def test_create():
    # This is a test endpoint to simulate the creation of a request
    # You can customize this endpoint for your testing purposes
    test_request_data = {
        "student_name": "John Doe",
        "student_id": "123456",
        "email": "john.doe@example.com",
        "mobile_number": "1234567890",
        "current_track": "Track A",
        "new_track": "Track B",
        "reason": "Transfer request"
    }
    return await create_request(test_request_data)

@app.get("/request_list", response_class=JSONResponse)
async def get_requests():
    async with app.state.mysql_pool.acquire() as connection:
        async with connection.cursor() as cursor:
            await cursor.execute("SELECT * FROM request_list")
            result = await cursor.fetchall()
            columns = [col[0] for col in cursor.description]  # Get column names
            data = [dict(zip(columns, row)) for row in result]  # Construct dictionary with key-value pairs
            return {"data": data}

@app.put("/request_list/{request_id}/status/{status}")
async def change_status(request_id: int, status: str):
    if status.lower() not in ["approve", "reject"]:
        raise HTTPException(status_code=400, detail="Invalid status")

    async with app.state.mysql_pool.acquire() as connection:
        async with connection.cursor() as cursor:
            sql = "UPDATE request_list SET status = %s WHERE id = %s"
            await cursor.execute(sql, (status.lower(), request_id))
            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="Request not found")
            return {"message": "Status updated successfully"}


@app.get("/print/{request_id}")
async def print_request_page(request_id: int, request: Request):
    request_data = {}
    async with app.state.mysql_pool.acquire() as connection:
        async with connection.cursor() as cursor:
            sql = "SELECT * FROM request_list WHERE id = %s"
            await cursor.execute(sql, (request_id,))
            result = await cursor.fetchone()
            if result:
                columns = [col[0] for col in cursor.description]
                request_data = dict(zip(columns, result))
    if not request_data:
        raise HTTPException(status_code=404, detail="Request not found")
            
    return templates.TemplateResponse("print.html", {"request_id": request_id, "request": request, "request_data": request_data})
