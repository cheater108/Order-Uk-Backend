import User from "../database/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function handleRegister(req, res) {
    const { name, email, number, password } = req.body;

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
    res.json({ addresses: user.addresses });
}

async function postAddress(req, res) {
    const address = req.body;
    await User.findOneAndUpdate(
        { email: req.user.email },
        { $push: { addresses: address } }
    );

    res.status(201).json({ message: "Address added successfully" });
}

async function postCard(req, res) {
    const card = req.body;

    await User.findOneAndUpdate(
        { email: req.user.email },
        { $push: { payments: card } }
    );

    res.status(201).json({ message: "Card added successfully" });
}

async function getCards(req, res) {
    const user = await User.findOne({ email: req.user.email });

    res.json({ payments: user.payments });
}

export {
    handleLogin,
    handleRegister,
    postAddress,
    getAddress,
    postCard,
    getCards,
};
