import express from "express";
import {
  getProject,
  getProjects,
} from "../controllers/project.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProject);

export default router;