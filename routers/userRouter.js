import { Router } from "express";
import {
    deleteCard,
    getAddress,
    getCardById,
    getCards,
    handleLogin,
    handleRegister,
    postAddress,
    postCard,
    updateCard,
} from "../controllers/userController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";
import catchAsync from "../utils/catchAsync.js";

const router = Router();

router.post("/login", catchAsync(handleLogin));
router.post("/register", catchAsync(handleRegister));
router.post("/address", isLoggedIn, catchAsync(postAddress));
router.post("/card", isLoggedIn, catchAsync(postCard));
router.get("/card", isLoggedIn, catchAsync(getCards));
router.get("/card/:id", isLoggedIn, catchAsync(getCardById));
router.get("/address", isLoggedIn, catchAsync(getAddress));
router.delete("/card/:id", isLoggedIn, catchAsync(deleteCard));
router.put("/card/:id", isLoggedIn, catchAsync(updateCard));

export default router;
