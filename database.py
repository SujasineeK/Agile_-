import aiomysql

mysql_config = {
    "host": "localhost",
    "user": "root",
    "password": "",  
    "db": "ictdatabase",  
    "autocommit": True,
}

async def get_mysql_pool():
    pool = await aiomysql.create_pool(**mysql_config)
    return pool

async def close_mysql_pool(pool):
    pool.close()
    await pool.wait_closed()
