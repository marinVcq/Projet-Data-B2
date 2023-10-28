import { db } from "../db.js";
import jwt from "jsonwebtoken";

// Fetch all employees
export const getEmployees = (req, res) => {
  console.log("try to get all employees");
  const q = "SELECT * FROM employee";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

// Fetch one employee
export const getEmployee = (req, res) => {
  const q = "SELECT  FROM employee WHERE idemployee = ? ";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};