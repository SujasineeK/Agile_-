-- Create the database
CREATE DATABASE IF NOT EXISTS ictdatabase;

-- Switch to the created database
USE ictdatabase;

-- Create the request_list table with date and time initialization
CREATE TABLE IF NOT EXISTS request_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    student_id VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    current_track VARCHAR(100) NOT NULL,
    new_track VARCHAR(100) NOT NULL,
    status VARCHAR(100),
    reason TEXT,
    created_date DATE,
    created_time TIME
);


select * from request_list;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role ENUM('admin', 'student') NOT NULL
);
INSERT INTO users (username, password, role) VALUES
('admin@mahidol.edu', '1234', 'admin'),
('student@student.mahidol.edu', '1234', 'student');
