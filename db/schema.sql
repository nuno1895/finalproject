CREATE DATABASE saveup_db;
USE saveup_db;

CREATE TABLE users
(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	username VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE income_frequencies
(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	type VARCHAR(100) NOT NULL
);

CREATE TABLE incomes
(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	income_frequency_id INTEGER NOT NULL,
	income INTEGER NOT NULL,
	FOREIGN KEY (income_frequency_id) REFERENCES income_frequencies(id),
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE types
(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	total INTEGER
);

CREATE TABLE budgets
(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	type_id INTEGER NOT NULL,
	threshold INTEGER NOT NULL,
	the_date DATE,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (type_id) REFERENCES types(id)
);

CREATE TABLE expenses
(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	type_id INTEGER NOT NULL,
	expenditure INTEGER DEFAULT 0,
	the_date DATE,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (type_id) REFERENCES types(id)
);

CREATE TABLE grades
(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL,
	budget_id INTEGER NOT NULL,
	type_id INTEGER NOT NULL,
	grade VARCHAR(1),
	time_stamp TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (budget_id) REFERENCES budgets(id),
	FOREIGN KEY (type_id) REFERENCES types(id)
);