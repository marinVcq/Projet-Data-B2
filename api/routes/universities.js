import express from "express";
import {
  getUniversity,
  getUniversities,
} from "../controllers/university.js";

const router = express.Router();

router.get("/", getUniversities);
router.get("/:id", getUniversity);

export default router;