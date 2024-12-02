import mongoose from "mongoose";

function connectDB() {
    mongoose.connect(process.env.MONGO_LOCAL, {
        dbName: "order-uk",
    });
}

export default connectDB;
