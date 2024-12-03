import { Router } from "express";
import {
    getMenu,
    getPopularRestaurants,
    searchProduct,
} from "../controllers/restaurantController.js";
import catchAsync from "../utils/catchAsync.js";

const router = Router();

router.get("/menu", catchAsync(getMenu));
router.get("/popular", catchAsync(getPopularRestaurants));
router.get("/search", catchAsync(searchProduct));

export default router;
