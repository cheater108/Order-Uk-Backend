import Comment from "../database/commentsSchema.js";

async function getComments(req, res) {
    const comments = await Comment.find({});
    res.json({ comments });
}

export { getComments };
