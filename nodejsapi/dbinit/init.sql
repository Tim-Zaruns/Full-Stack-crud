CREATE DATABASE IF NOT EXISTS cruddb;

USE cruddb;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    age VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(name, email, password, age) VALUES ('John', 'john123@gmail.com', '12345678', '37');
