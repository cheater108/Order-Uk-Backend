function catchAsync(fn) {
    return (req, res) => {
        fn(req, res).catch((err) =>
            req.status(500).json({ error: "internal server error" })
        );
    };
}

export default catchAsync;
