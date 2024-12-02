import { Router } from "express";
import {
    getSharedCart,
    shareCart,
} from "../controllers/sharedCartController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = Router();

router.post("/", isLoggedIn, shareCart);
router.get("/:id", getSharedCart);

export default router;
