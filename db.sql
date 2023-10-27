-- Drop the database if it exists
DROP DATABASE IF EXISTS ibs;

-- Create the database
CREATE DATABASE ibs;

-- Use the created database
USE ibs;

-- Drop all tables if they exist
DROP TABLE IF EXISTS experiment_use_product;
DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS order_material;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS reservation;
DROP TABLE IF EXISTS reservation_material;
DROP TABLE IF EXISTS supplier;
DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS thesis;
DROP TABLE IF EXISTS university;
DROP TABLE IF EXISTS laboratoire;
DROP TABLE IF EXISTS material;
DROP TABLE IF EXISTS meeting;
DROP TABLE IF EXISTS pet_store;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS experiment;
DROP TABLE IF EXISTS employee;

-- Create Table laboratory
CREATE TABLE `laboratoire` (
  `idlaboratoire` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  `headcount` int DEFAULT NULL,
  PRIMARY KEY (`idlaboratoire`)
);

-- Create Table employee
CREATE TABLE `employee` (
  `idemployee` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `has_laboratory` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `has_university` int DEFAULT NULL,
  `contractType` varchar(45) DEFAULT NULL,
  `has_thesis` int DEFAULT NULL,
  `has_team` int DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idemployee`),
  KEY `laboratoire_fk_idx` (`has_laboratory`),
  KEY `university_fk_idx` (`has_university`),
  KEY `thesis_fk_idx` (`has_thesis`),
  KEY `team_fk_idx` (`has_team`)
);

-- Create Table experiment
CREATE TABLE `experiment` (
  `idexperiment` int NOT NULL AUTO_INCREMENT,
  `goal` varchar(45) DEFAULT NULL,
  `preparationTime` int DEFAULT NULL,
  `incubationTime` int DEFAULT NULL,
  `result` tinyint DEFAULT NULL,
  PRIMARY KEY (`idexperiment`)
);

-- Create Table material
CREATE TABLE `material` (
  `idmaterial` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  PRIMARY KEY (`idmaterial`)
);

-- Create Table meeting
CREATE TABLE `meeting` (
  `idmeeting` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `speaker1` int DEFAULT NULL,
  `speaker2` int DEFAULT NULL,
  `room` varchar(45) DEFAULT NULL,
  `has_laboratory` int DEFAULT NULL,
  PRIMARY KEY (`idmeeting`),
  KEY `laboratory_has_meeting_fk_idx` (`has_laboratory`),
  KEY `speaker1_fk_idx` (`speaker1`),
  KEY `speaker2_fk_idx` (`speaker2`)
);

-- Create Table team
CREATE TABLE `team` (
  `idteam` int NOT NULL AUTO_INCREMENT,
  `headcount` int DEFAULT NULL,
  `has_leader` int DEFAULT NULL,
  `has_laboratory` int DEFAULT NULL,
  `task` varchar(45) DEFAULT NULL,
  `has_project` int DEFAULT NULL,
  PRIMARY KEY (`idteam`),
  KEY `leader_fk_idx` (`has_leader`),
  KEY `laboratory_fk_idx` (`has_laboratory`),
  KEY `project_fk_idx` (`has_project`)
);

-- Create Table order
CREATE TABLE `order` (
  `idorder` int NOT NULL AUTO_INCREMENT,
  `orderDate` datetime DEFAULT NULL,
  `orderNumber` varchar(45) DEFAULT NULL,
  `has_product` int DEFAULT NULL,
  `deliveryDate` date DEFAULT NULL,
  `has_laboratory` int DEFAULT NULL,
  `has_supplier` int DEFAULT NULL,
  PRIMARY KEY (`idorder`),
  KEY `product_fk_idx` (`has_product`),
  KEY `supplier_fk_idx` (`has_supplier`),
  KEY `order_laboratory_fk_idx` (`has_laboratory`)
);

-- Create Table pet_store
CREATE TABLE `pet_store` (
  `idpet_store` int NOT NULL AUTO_INCREMENT,
  `cageNumber` varchar(45) DEFAULT NULL,
  `has_laboratory` int DEFAULT NULL,
  `petAmount` int DEFAULT NULL,
  `petGender` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpet_store`),
  KEY `pet_lab_fk_idx` (`has_laboratory`)
);

-- Create Table Product
CREATE TABLE `product` (
  `idproduct` int NOT NULL AUTO_INCREMENT,
  `has_manager` int DEFAULT NULL,
  `has_current_order` int DEFAULT NULL,
  `has_laboratory` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `concentration` int DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `contraindication` varchar(45) DEFAULT NULL,
  `operatingTemperature` int DEFAULT NULL,
  `volume` int DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `material` varchar(45) DEFAULT NULL,
  `container` varchar(45) DEFAULT NULL,
  `tank` varchar(45) DEFAULT NULL,
  `box` varchar(45) DEFAULT NULL,
  `subset` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idproduct`),
  KEY `manager_fk_idx` (`has_manager`),
  KEY `current_order_fk_idx` (`has_current_order`),
  KEY `product_has_laboratory_fk_idx` (`has_laboratory`)
);

-- Create Table project
CREATE TABLE `project` (
  `idproject` int NOT NULL AUTO_INCREMENT,
  `subject` varchar(45) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `publicationCount` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `has_experiment` int DEFAULT NULL,
  PRIMARY KEY (`idproject`),
  KEY `experiment_fk_idx` (`has_experiment`)
);

-- Create Table reservation
CREATE TABLE `reservation` (
  `idreservation` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `has_requestor` int DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `has_laboratory` int DEFAULT NULL,
  PRIMARY KEY (`idreservation`),
  KEY `requestor_fk_idx` (`has_requestor`),
  KEY `reservation_laboratory_fk_idx` (`has_laboratory`)
);

-- Create Table supplier
CREATE TABLE `supplier` (
  `idsupplier` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idsupplier`)
);

-- Create Table thesis
CREATE TABLE `thesis` (
  `idthesis` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  PRIMARY KEY (`idthesis`)
);

-- Create table university
CREATE TABLE `university` (
  `iduniversity` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `workHours` int DEFAULT NULL,
  PRIMARY KEY (`iduniversity`)
);

-- Create table n-n cardinality reservation has material
CREATE TABLE `reservation_material` (
  `id_reservation` int NOT NULL,
  `id_material` int NOT NULL,
  PRIMARY KEY (`id_reservation`,`id_material`),
  KEY `reservation_has_material_fk_idx` (`id_material`),
  CONSTRAINT `material_has_reservation` FOREIGN KEY (`id_reservation`) REFERENCES `reservation` (`idreservation`),
  CONSTRAINT `reservation_has_material_fk` FOREIGN KEY (`id_material`) REFERENCES `material` (`idmaterial`)
);

-- Create table n-n cardinality exeriment use product
CREATE TABLE `experiment_use_product` (
  `id_experiment` int NOT NULL,
  `id_product` int NOT NULL,
  PRIMARY KEY (`id_experiment`,`id_product`),
  KEY `product_fk_idx` (`id_product`),
  CONSTRAINT `experiment_has_product_fk` FOREIGN KEY (`id_experiment`) REFERENCES `experiment` (`idexperiment`),
  CONSTRAINT `product_has_experiment_fk` FOREIGN KEY (`id_product`) REFERENCES `product` (`idproduct`)
);

-- Foreign key constraints for the Employee table
ALTER TABLE `employee`
  ADD CONSTRAINT `laboratoire_fk` FOREIGN KEY (`has_laboratory`) REFERENCES `laboratoire` (`idlaboratoire`),
  ADD CONSTRAINT `university_fk` FOREIGN KEY (`has_university`) REFERENCES `university` (`iduniversity`),
  ADD CONSTRAINT `thesis_fk` FOREIGN KEY (`has_thesis`) REFERENCES `thesis` (`idthesis`),
  ADD CONSTRAINT `team_fk` FOREIGN KEY (`has_team`) REFERENCES `team` (`idteam`);

  -- Foreign key constraints for the Meeting table
ALTER TABLE `meeting`
  ADD CONSTRAINT `laboratory_has_meeting_fk` FOREIGN KEY (`has_laboratory`) REFERENCES `laboratoire` (`idlaboratoire`),
  ADD CONSTRAINT `speaker1_fk` FOREIGN KEY (`speaker1`) REFERENCES `employee` (`idemployee`),
  ADD CONSTRAINT `speaker2_fk` FOREIGN KEY (`speaker2`) REFERENCES `employee` (`idemployee`);

  -- Foreign key constraints for the Team table
ALTER TABLE `team`
  ADD CONSTRAINT `laboratory_fk` FOREIGN KEY (`has_laboratory`) REFERENCES `laboratoire` (`idlaboratoire`),
  ADD CONSTRAINT `leader_fk` FOREIGN KEY (`has_leader`) REFERENCES `employee` (`idemployee`),
  ADD CONSTRAINT `project_fk` FOREIGN KEY (`has_project`) REFERENCES `project` (`idproject`);

  -- Foreign key constraints for the Order table
ALTER TABLE `order`
  ADD CONSTRAINT `product_fk` FOREIGN KEY (`has_product`) REFERENCES `product` (`idproduct`),
  ADD CONSTRAINT `supplier_fk` FOREIGN KEY (`has_supplier`) REFERENCES `supplier` (`idsupplier`),
  ADD CONSTRAINT `order_laboratory_fk` FOREIGN KEY (`has_laboratory`) REFERENCES `laboratoire` (`idlaboratoire`);

-- Foreign key constraints for the Pet Store table
ALTER TABLE `pet_store`
  ADD CONSTRAINT `pet_lab_fk` FOREIGN KEY (`has_laboratory`) REFERENCES `laboratoire` (`idlaboratoire`);

  -- Foreign key constraints for the Product table
ALTER TABLE `product`
  ADD CONSTRAINT `current_order_fk` FOREIGN KEY (`has_current_order`) REFERENCES `order` (`idorder`),
  ADD CONSTRAINT `manager_fk` FOREIGN KEY (`has_manager`) REFERENCES `employee` (`idemployee`),
  ADD CONSTRAINT `product_has_laboratory_fk` FOREIGN KEY (`has_laboratory`) REFERENCES `laboratoire` (`idlaboratoire`);

  -- Foreign key constraints for the Project table
ALTER TABLE `project`
  ADD CONSTRAINT `experiment_fk` FOREIGN KEY (`has_experiment`) REFERENCES `experiment` (`idexperiment`);

  -- Foreign key constraints for the Reservation table
ALTER TABLE `reservation`
  ADD CONSTRAINT `requestor_fk` FOREIGN KEY (`has_requestor`) REFERENCES `employee` (`idemployee`),
  ADD CONSTRAINT `reservation_laboratory_fk` FOREIGN KEY (`has_laboratory`) REFERENCES `laboratoire` (`idlaboratoire`);

  SET foreign_key_checks = 0;

-- Insert 10 employees into the employee table
INSERT INTO employee (idemployee, name, surname, birthdate, has_laboratory, status, has_university, contractType, has_thesis, has_team, password, role)
VALUES
  (1, 'John', 'Doe', '1990-01-01', 1, 'Active', 1, 'Full-Time', 1, 1, 'password1', 'Role1'),
  (2, 'Jane', 'Smith', '1992-03-15', 2, 'Inactive', 2, 'Part-Time', 0, 2, 'password2', 'Role2'),
  (3, 'Alice', 'Johnson', '1988-07-20', 3, 'Active', 3, 'Contract', 1, 3, 'password3', 'Role3'),
  (4, 'Bob', 'Williams', '1995-05-10', 4, 'Inactive', 4, 'Full-Time', 0, 4, 'password4', 'Role4'),
  (5, 'Charlie', 'Brown', '1998-12-05', 1, 'Active', 2, 'Part-Time', 1, 2, 'password5', 'Role5'),
  (6, 'Eva', 'Miller', '1993-09-18', 3, 'Inactive', 3, 'Contract', 0, 3, 'password6', 'Role6'),
  (7, 'David', 'Jones', '1991-04-30', 4, 'Active', 4, 'Full-Time', 1, 4, 'password7', 'Role7'),
  (8, 'Grace', 'Anderson', '1989-11-25', 1, 'Inactive', 2, 'Part-Time', 0, 2, 'password8', 'Role8'),
  (9, 'Frank', 'Taylor', '1996-06-15', 3, 'Active', 3, 'Contract', 1, 3, 'password9', 'Role9'),
  (10, 'Helen', 'White', '1994-02-08', 4, 'Inactive', 4, 'Full-Time', 0, 4, 'password10', 'Role10');

  -- Insert 4 laboratories into the laboratoire table
INSERT INTO laboratoire (idlaboratoire, name, address, city, phoneNumber, email, website, headcount)
VALUES
  (1, 'Lab1', '123 Main Street', 'Paris', '123-456-7890', 'lab1@example.com', 'www.lab1.com', 50),
  (2, 'Lab2', '456 Oak Avenue', 'Paris', '987-654-3210', 'lab2@example.com', 'www.lab2.com', 75),
  (3, 'Lab3', '789 Pine Road', 'Brest', '111-222-3333', 'lab3@example.com', 'www.lab3.com', 60),
  (4, 'Lab4', '101 Elm Lane', 'Chicago', '444-555-6666', 'lab4@example.com', 'www.lab4.com', 80);

  -- Insert dummy values into the experiment table
INSERT INTO experiment (idexperiment, goal, preparationTime, incubationTime, result)
VALUES
  (1, 'Research on Topic A', 20, 30, 1),
  (2, 'Study on Topic B', 15, 25, 0);

  -- Insert 4 universities into the university table
INSERT INTO university (iduniversity, name, address, workHours)
VALUES
  (1, 'University1', '123 College Street', 40),
  (2, 'University2', '456 Campus Avenue', 35),
  (3, 'University3', '789 Education Lane', 38),
  (4, 'University4', '101 Learning Road', 42);

  -- Insert 4 thesis records into the thesis table
INSERT INTO thesis (idthesis, name, description, startDate, endDate)
VALUES
  (1, 'Thesis1', 'Research on Topic A', '2023-01-15', '2023-06-30'),
  (2, 'Thesis2', 'Study on Topic B', '2022-11-20', '2023-05-15'),
  (3, 'Thesis3', 'Investigation into Topic C', '2023-03-01', '2023-08-31'),
  (4, 'Thesis4', 'Analysis of Topic D', '2023-02-10', '2023-07-20');

  -- Insert 4 projects into the project table
INSERT INTO project (idproject, subject, startDate, publicationCount, status, has_experiment)
VALUES
  (1, 'Project A', '2023-01-10', 5, 'Active', 1),
  (2, 'Project B', '2023-02-15', 8, 'Inactive', 2),
  (3, 'Project C', '2023-03-20', 3, 'Active', 3),
  (4, 'Project D', '2023-04-25', 6, 'Active', 4);


-- Insert 4 teams into the team table
INSERT INTO team (idteam, headcount, has_leader, has_laboratory, task, has_project)
VALUES
  (1, 10, 1, 1, 'Research', 1),
  (2, 8, 2, 2, 'Development', 2),
  (3, 12, 3, 3, 'Analysis', 1),
  (4, 15, 4, 4, 'Testing', 2);

  -- Insert dummy values into the reservation table
INSERT INTO reservation (idreservation, date, has_requestor, duration, has_laboratory)
VALUES
  (1, '2023-04-01 10:00:00', 1, 4, 1),
  (2, '2023-04-05 14:30:00', 2, 3, 2);

-- Insert dummy values into the supplier table
INSERT INTO supplier (idsupplier, name, address, phoneNumber, email)
VALUES
  (1, 'Supplier1', 'Address1', '111-222-3333', 'supplier1@example.com'),
  (2, 'Supplier2', 'Address2', '444-555-6666', 'supplier2@example.com');

  -- Insert dummy values into the material table
INSERT INTO material (idmaterial, name, type, amount)
VALUES
  (1, 'Material1', 'Type1', 100),
  (2, 'Material2', 'Type2', 150);

-- Insert dummy values into the meeting table
INSERT INTO meeting (idmeeting, date, speaker1, speaker2, room, has_laboratory)
VALUES
  (1, '2023-01-05 10:00:00', 1, 2, 'Room1', 1),
  (2, '2023-02-10 14:30:00', 3, 4, 'Room2', 2);

-- Insert dummy values into the order table
INSERT INTO `order` (idorder, orderDate, orderNumber, has_product, deliveryDate, has_laboratory, has_supplier)
VALUES
  (1, '2023-03-01 08:00:00', 'Order001', 1, '2023-03-15', 1, 1),
  (2, '2023-03-05 12:30:00', 'Order002', 2, '2023-03-20', 2, 2);

-- Insert dummy values into the pet_store table
INSERT INTO pet_store (idpet_store, cageNumber, has_laboratory, petAmount, petGender)
VALUES
  (1, 'Cage1', 1, 20, 'Male'),
  (2, 'Cage2', 2, 15, 'Female');

-- Insert dummy values into the product table
INSERT INTO product (idproduct, has_manager, has_current_order, has_laboratory, name, concentration, location, amount, contraindication, operatingTemperature, volume, size, material, container, tank, box, subset)
VALUES
  (1, 1, 1, 1, 'Product1', 10, 'Location1', 200, 'None', 25, 500, 'Size1', 'Material1', 'Container1', 'Tank1', 'Box1', 'Subset1'),
  (2, 2, 2, 2, 'Product2', 15, 'Location2', 150, 'Allergy', 30, 300, 'Size2', 'Material2', 'Container2', 'Tank2', 'Box2', 'Subset2');

  SET foreign_key_checks = 1;











