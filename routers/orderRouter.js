import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    const order = req.body;
    res.json({ message: "Order placed Successfully", order });
});

export default router;
