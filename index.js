import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import restaurantRouter from "./routers/restaurantRouter.js";
import commentsRouter from "./routers/commentsRouter.js";
import orderRouter from "./routers/orderRouter.js";
import shareCartRouter from "./routers/shareCartRouter.js";
import connectDB from "./database/connectDB.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/share", shareCartRouter);

app.get("/api/v1/health", (req, res) => {
    res.json({ message: "server is healthy" });
});

app.listen(port, () => {
    console.log("Server started on port", port);
    connectDB();
});
