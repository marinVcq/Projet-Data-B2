import express from "express";
import {
  getEmployee,
  getEmployees,
} from "../controllers/employee.js";

const router = express.Router();

router.get("/", getEmployees);
router.get("/:id", getEmployee);

export default router;