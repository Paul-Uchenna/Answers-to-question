-- SQLite
CREATE TABLE Product (
    product_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price INTEGER CHECK (price > 0)
);

INSERT INTO Product (
      product_id,
      product_name,
      category,
      price
      ) VALUES (
      'P01',
      'Samsung Galaxy S20',
      'Smartphone',
      3299
      ),(
      'P02',
      'Asus Notebook',
      'PC',
      4599
);

CREATE TABLE Customer (
    customer_id VARCHAR(20) PRIMARY KEY,
    customer_name VARCHAR(20) NOT NULL,
    customer_tel INTEGER
);

INSERT INTO Customer (
      customer_id,
      customer_name,
      customer_tel
      ) VALUES (
      'C01',
      'Ali',
      71321009
      ),(
      'C02',
      'ASMA',
      77345823
);

CREATE TABLE Orders (
    product_id VARCHAR(20),
    customer_id VARCHAR(20),
    order_date DATE DEFAULT NULL,
    quantity INTEGER,
    total_amount INTEGER,
    FOREIGN KEY (product_id) REFERENCES Product(product_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

INSERT INTO Orders (
      product_id,
      customer_id,
      order_date,
      quantity,
      total_amount
      ) VALUES (
      'P01',
      'C01',
      NULL,
      2,
      9198
      ),(
      'P02',
      'C02',
      '2020-05-28',
      1,
      3299
);
