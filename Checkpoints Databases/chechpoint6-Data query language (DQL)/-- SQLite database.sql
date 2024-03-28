-- SQLite
CREATE TABLE Product (
    product_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price INTEGER CHECK (price > 0)
);

INSERT INTO Product (product_id, product_name, category, price)
VALUES
('P01', 'Samsung Galaxy S20', 'Smartphone', 3299),
('P02', 'Asus Notebook', 'PC', 4599);

CREATE TABLE Customer (
    customer_id VARCHAR(20) PRIMARY KEY,
    customer_name VARCHAR(20) NOT NULL,
    customer_tel INTEGER
);

INSERT INTO Customer (customer_id, customer_name, customer_tel)
VALUES
('C01', 'Ali', 71321009),
('C02', 'ASMA', 77345823);

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

INSERT INTO Orders (product_id, customer_id, order_date, quantity, total_amount)
VALUES
('P01', 'C01', NULL, 2, 9198),
('P02', 'C02', '2020-05-28', 1, 3299);

-- Ajout de données supplémentaires dans la table Product
INSERT INTO Product (product_id, product_name, category, price)
VALUES
('P03', 'Apple iPhone 12', 'Smartphone', 7999),
('P04', 'Dell XPS 15', 'Laptop', 9999);

-- Ajout de données supplémentaires dans la table Customer
INSERT INTO Customer (customer_id, customer_name, customer_tel)
VALUES
('C03', 'Paul', 7654321),
('C04', 'Emma', 9876543),
('C05', 'Michael', 8765432);

-- Ajout de données supplémentaires dans la table Orders
INSERT INTO Orders (product_id, customer_id, order_date, quantity, total_amount)
VALUES
('P01', 'C02', '2021-01-15', 1, 3299),
('P02', 'C01', '2021-02-20', 3, 13797),
('P03', 'C03', '2021-03-25', 2, 15998),
('P04', 'C04', '2021-04-30', 1, 9999),
('P03', 'C05', '2021-05-05', 1, 7999);


--Display all the data of customers 
SELECT * FROM Customer;

--Display the product_name and category for products which their price is between 5000 and 10000
SELECT product_name, category
FROM Product
WHERE price BETWEEN 5000 AND 10000;

--Display all the data of products sorted in descending order of price.
SELECT * 
FROM Product
ORDER BY price DESC;

--Display the total number of orders, the average amount, the highest total amount 
--and the lower total amountFor each product_id, display the number of orders
SELECT product_id,
       COUNT(order_id) AS total_orders,
       AVG(total_amount) AS average_amount,
       MAX(total_amount) AS highest_total_amount,
       MIN(total_amount) AS lowest_total_amount
FROM Orders
GROUP BY product_id;

SELECT product_id, COUNT(order_id) AS order_count
FROM Orders
GROUP BY product_id;

--Display the customer_id which has more than 2 orders
SELECT customer_id
FROM Orders
GROUP BY customer_id
HAVING COUNT(order_id) > 2;

--For each month of the 2020 year, display the number of orders
SELECT MONTH(order_date) AS month, COUNT(order_id) AS order_count
FROM Orders
WHERE YEAR(order_date) = 2020
GROUP BY MONTH(order_date);

--For each order, display the product_name, the customer_name and the date of the order
SELECT p.product_name, c.customer_name, o.order_date
FROM Orders o
JOIN Product p ON o.product_id = p.product_id
JOIN Customer c ON o.customer_id = c.customer_id;

--Display all the orders made three months ago 
SELECT *
FROM Orders
WHERE order_date = DATE('now', '-3 months');

--Display customers (customer_id) who have never ordered a product
SELECT c.customer_id
FROM Customer c
LEFT JOIN Orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
