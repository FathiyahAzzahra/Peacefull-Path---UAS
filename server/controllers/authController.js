const User = require("../models/userModel");

const authController = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const existingUser = await User.findByUsername(username);
        if (existingUser) return res.status(400).send("User already exists.");

        const newUser = await User.create(username, password);
        res.status(201).send(newUser);
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findByUsername(username);
        if (!user || user.password !== password) return res.status(401).send("Invalid credentials");

        res.status(200).send("Login successful");
    },
};

module.exports = authController;
