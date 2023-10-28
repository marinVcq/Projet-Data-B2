import { db } from "../db.js";
import jwt from "jsonwebtoken";

// Fetch all laboratories
export const getLabos = (req, res) => {
  console.log("try to get all labos");
  const q = "SELECT * FROM laboratoire";

  db.query(q, [], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

// Fetch on laboratory
export const getLabo = (req, res) => {
  console.log("try to get one labo")
  const q = "SELECT * FROM laboratoire WHERE idlaboratoire = ? ";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};