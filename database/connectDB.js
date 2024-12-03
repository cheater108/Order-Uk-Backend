import mongoose from "mongoose";

function connectDB() {
    if (process.env.ENV === "LOCAL") {
        mongoose.connect(process.env.MONGO_LOCAL, {
            dbName: "order-uk",
        });
    } else {
        mongoose.connect(process.env.MONGO_ATLAS, {
            dbName: "order-uk",
        });
    }
}

export default connectDB;
