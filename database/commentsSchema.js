import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    img: String,
    date: String,
});

const Comment = mongoose.model("Comment", commentsSchema);

export default Comment;
