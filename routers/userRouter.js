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

const router = Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);
router.post("/address", isLoggedIn, postAddress);
router.post("/card", isLoggedIn, postCard);
router.get("/card", isLoggedIn, getCards);
router.get("/card/:id", isLoggedIn, getCardById);
router.get("/address", isLoggedIn, getAddress);
router.delete("/card/:id", isLoggedIn, deleteCard);
router.put("/card/:id", isLoggedIn, updateCard);

export default router;
