import mongoose, { Schema } from "mongoose";

const popularSchema = new Schema({
    name: String,
    data: [],
});

const Popular = mongoose.model("Popular", popularSchema);

export default Popular;
