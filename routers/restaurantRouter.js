import { Router } from "express";
import {
    getMenu,
    getPopularRestaurants,
} from "../controllers/restaurantController.js";

const router = Router();

router.get("/menu", getMenu);
router.get("/popular", getPopularRestaurants);

export default router;
