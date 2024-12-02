import mongoose, { Schema } from "mongoose";

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    menu: [
        {
            name: String,
            description: String,
            price: Number,
            img: String,
            item_type: String,
        },
    ],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
