import { Router } from "express";
import {
    getAddress,
    getCards,
    handleLogin,
    handleRegister,
    postAddress,
    postCard,
} from "../controllers/userController.js";
import isLoggedIn from "../middleware/isLoggedIn.js";

const router = Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);
router.post("/address", isLoggedIn, postAddress);
router.post("/card", isLoggedIn, postCard);
router.get("/card", isLoggedIn, getCards);
router.get("/address", isLoggedIn, getAddress);

export default router;
