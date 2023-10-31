import { db } from "../db.js";
import jwt from "jsonwebtoken";

// Fetch all laboratories
export const getProjects = (req, res) => {
  console.log("try to get all projects");
  const q = "SELECT * FROM project";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

// Fetch on laboratory
export const getProject = (req, res) => {
  console.log("try to get one project")
  const q = "SELECT * FROM project WHERE idproject = ? ";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};