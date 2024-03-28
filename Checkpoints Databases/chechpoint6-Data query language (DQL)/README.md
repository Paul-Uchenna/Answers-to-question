# Database Management with SQLite

This repository contains SQL commands for managing a database using SQLite. Below are the instructions and SQL commands provided:

## Instructions:

1. Display all the data of customers.
2. Display the `product_name` and `category` for products whose price is between 5000 and 10000.
3. Display all the data of products sorted in descending order of price.
4. Display the total number of orders, the average amount, the highest total amount, and the lowest total amount For each `product_id`, display the number of orders.
5. Display the `customer_id` which has more than 2 orders.
6. For each month of the 2020 year, display the number of orders.
7. For each order, display the `product_name`, the `customer_name`, and the date of the order.
8. Display all the orders made three months ago.
9. Display customers (`customer_id`) who have never ordered a product.

## Database Schema:

The database schema is designed using SQLite. It consists of three tables: `Product`, `Customer`, and `Orders`. Below is the schema:

```sql
CREATE TABLE Product (
    product_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price INTEGER CHECK (price > 0)
);

CREATE TABLE Customer (
    customer_id VARCHAR(20) PRIMARY KEY,
    customer_name VARCHAR(20) NOT NULL,
    customer_tel INTEGER
);

CREATE TABLE Orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id VARCHAR(20),
    customer_id VARCHAR(20),
    order_date DATE DEFAULT NULL,
    quantity INTEGER,
    total_amount INTEGER,
    FOREIGN KEY (product_id) REFERENCES Product(product_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);
```
