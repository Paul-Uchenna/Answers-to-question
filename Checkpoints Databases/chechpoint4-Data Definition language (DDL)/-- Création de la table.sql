-- Création de la table Product
CREATE TABLE Product (
    product_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(20) NOT NULL,
    price INTEGER  CHECK (price > 0)
);

-- Création de la table Customer
CREATE TABLE Customer (
    customer_id VARCHAR(20) PRIMARY KEY,
    customer_name VARCHAR(20) NOT NULL,
    customer_tel INTEGER
);

-- Création de la table Order
CREATE TABLE Orders (
    order_id INTEGER PRIMARY KEY,
    product_id VARCHAR(20),
    customer_id VARCHAR(20),
    quantity INTEGER,
    total_amount INTEGER,
    FOREIGN KEY (product_id) REFERENCES Product(product_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

-- Add a column
ALTER TABLE Product ADD category VARCHAR(20);
ALTER TABLE Orders ADD orderdate DATE DEFAULT CURRENT_DATE;


