import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },

    addresses: [
        new Schema({
            state: String,
            city: String,
            pin: String,
            phone: String,
            address: {
                type: String,
                required: true,
            },
        }),
    ],

    payments: [
        new Schema({
            card_no: {
                type: String,
                required: true,
                trim: true,
            },
            name: {
                type: String,
                required: true,
            },
            cvc: String,
            exp: String,
        }),
    ],
});

const User = mongoose.model("User", userSchema);

export default User;
