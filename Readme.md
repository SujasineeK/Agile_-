# setting database
1. create database by database.sql
2. Go to database.py to config

```

mysql_config = {
    "host": "localhost",
    "user": "root",
    "password": "",  
    "db": "ictdatabase",  
    "autocommit": True,
}

```

<hr />

# activate myenv

```
python -m venv myenv
```

```
.\myenv\Scripts\activate 
```

# Install libary

```
pip install -r requirements.txt

```

# Run project
```
uvicorn main:app --reload
```

<hr />
