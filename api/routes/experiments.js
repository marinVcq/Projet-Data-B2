import express from "express";
import {
  getExperiment,
  getExperiments,
} from "../controllers/experiment.js";

const router = express.Router();

router.get("/", getExperiments);
router.get("/:id", getExperiment);

export default router;