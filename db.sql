CREATE TABLE IF NOT EXISTS clientes(
    id SERIAL PRIMARY KEY unique,
    created TIMESTAMP not null,
    updated TIMESTAMP not null,
    status CHAR(1) not null,
    fname VARCHAR(50) Not null,
    lname VARCHAR(50) Not null,
    address TEXT,
    birthdate DATE Not Null
);
