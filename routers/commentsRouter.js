import { Router } from "express";
import { getComments } from "../controllers/commentsController.js";

const router = Router();

router.get("/", getComments);

export default router;
