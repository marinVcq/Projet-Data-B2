import { db } from "../db.js";
import jwt from "jsonwebtoken";

// Fetch all employees
export const getExperiments = (req, res) => {
  console.log("try to get all employees");
  const q = "SELECT * FROM project";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

// Fetch one employee
export const getExperiment = (req, res) => {
  const q = "SELECT * FROM experiment WHERE idexperiment = ? ";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};