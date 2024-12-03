import User from "../database/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
    addressSchema,
    cardSchema,
    getZodError,
    registerSchema,
} from "../utils/validators.js";

async function handleRegister(req, res) {
    const { name, email, number, password } = req.body;

    const result = registerSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json(getZodError(result.error));
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });

    const hash_password = await bcrypt.hash(password, 10);

    const new_user = new User({ name, email, number, password: hash_password });
    new_user.save();
    res.status(201).json({ message: "User created successfully" });
}

async function handleLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res
            .status(404)
            .json({ error: "Email or Password is incorrect" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        console.log(match, "ran", password);
        return res
            .status(404)
            .json({ error: "Email or Password is incorrect" });
    }

    const token = jwt.sign({ name: user.name, email }, process.env.SECRET_KEY, {
        expiresIn: "30d",
    });
    res.json({
        message: "User logged in successfully",
        token,
        name: user.name,
        email,
    });
}

async function getAddress(req, res) {
    const user = await User.findOne({ email: req.user.email });

    if (!user) return res.status(400).json({ error: "No addresses" });

    res.json({ addresses: user.addresses });
}

async function postAddress(req, res) {
    const address = req.body;

    const result = addressSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json(getZodError(result.error));
    }

    await User.findOneAndUpdate(
        { email: req.user.email },
        { $push: { addresses: address } }
    );

    res.status(201).json({ message: "Address added successfully" });
}

async function postCard(req, res) {
    const card = req.body;

    const result = cardSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json(getZodError(result.error));
    }

    await User.findOneAndUpdate(
        { email: req.user.email },
        { $push: { payments: card } }
    );

    res.status(201).json({ message: "Card added successfully" });
}

async function deleteCard(req, res) {
    const { id } = req.params;

    await User.findOneAndUpdate(
        { email: req.user.email },
        { $pull: { payments: { _id: id } } }
    );

    res.status(201).json({ message: "Card deleted successfully" });
}

async function getCardById(req, res) {
    const { id } = req.params;

    const user = await User.findOne({ email: req.user.email });

    const card = user.payments.find((e) => e._id.toString() === id);

    res.json({ card });
}

async function updateCard(req, res) {
    const card = req.body;
    const { id } = req.params;

    const result = cardSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json(getZodError(result.error));
    }

    await User.findOneAndUpdate(
        { email: req.user.email },
        { $pull: { payments: { _id: id } } }
    );

    await User.findOneAndUpdate(
        { email: req.user.email },
        { $push: { payments: card } }
    );

    res.status(201).json({ message: "Card updated successfully" });
}

async function getCards(req, res) {
    const user = await User.findOne({ email: req.user.email });

    if (!user) return res.status(400).json({ error: "No cards" });

    res.json({ payments: user.payments });
}

export {
    handleLogin,
    handleRegister,
    postAddress,
    getAddress,
    postCard,
    getCards,
    getCardById,
    deleteCard,
    updateCard,
};
