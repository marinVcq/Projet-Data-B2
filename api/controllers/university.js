import { db } from "../db.js";
import jwt from "jsonwebtoken";

// Fetch all laboratories
export const getUniversities = (req, res) => {
  console.log("try to get all universities");
  const q = "SELECT * FROM university";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

// Fetch on laboratory
export const getUniversity = (req, res) => {
  console.log("try to get one university")
  const q = "SELECT * FROM project WHERE iduniversity = ? ";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};