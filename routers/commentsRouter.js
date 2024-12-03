import { Router } from "express";
import { getComments } from "../controllers/commentsController.js";
import catchAsync from "../utils/catchAsync.js";

const router = Router();

router.get("/", catchAsync(getComments));

export default router;
