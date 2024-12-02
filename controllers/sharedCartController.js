import mongoose from "mongoose";
import Shared from "../database/sharedCartSchema.js";

async function shareCart(req, res) {
    const cart = req.body;
    const shared = new Shared({});

    shared.cart = cart;

    await shared.save();
    res.json({ id: shared._id });
}

async function getSharedCart(req, res) {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id))
        return res.status(404).json({ error: "No such cart" });

    const shared = await Shared.findById(id);

    if (!shared) return res.status(404).json({ error: "No such cart" });

    res.json({ shared });
}

export { shareCart, getSharedCart };
