import mongoose, { Schema } from "mongoose";

const sharedCartSchema = new Schema({
    cart: [
        {
            name: String,
            description: String,
            price: Number,
            img: String,
            item_type: String,
            count: Number,
        },
    ],
});

const Shared = mongoose.model("Shared", sharedCartSchema);

export default Shared;
