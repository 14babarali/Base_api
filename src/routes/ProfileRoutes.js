// User profile route
router.put('/profile', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
