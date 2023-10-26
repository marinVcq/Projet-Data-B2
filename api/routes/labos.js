import express from "express";
import {
  getLabo,
  getLabos,
} from "../controllers/labo.js";

const router = express.Router();

router.get("/", getLabos);
router.get("/:id", getLabo);

export default router;