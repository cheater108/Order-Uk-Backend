import { Router } from "express";
import {
    getSharedCart,
    shareCart,
} from "../controllers/sharedCartController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
import catchAsync from "../utils/catchAsync.js";

const router = Router();

router.post("/", isLoggedIn, catchAsync(shareCart));
router.get("/:id", catchAsync(getSharedCart));

export default router;
