import { Router } from "express";
import {
    getMenu,
    getPopularRestaurants,
    searchProduct,
} from "../controllers/restaurantController.js";

const router = Router();

router.get("/menu", getMenu);
router.get("/popular", getPopularRestaurants);
router.get("/search", searchProduct);

export default router;
