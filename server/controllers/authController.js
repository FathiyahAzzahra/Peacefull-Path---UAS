const User = require("../models/userModel");

const authController = {
    register: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Periksa apakah pengguna sudah ada
            const existingUser = await User.findOne({ username });
            if (existingUser) return res.status(400).json({ message: "User already exists." });

            // Buat pengguna baru
            const newUser = new User({ username, password });
            await newUser.save();

            // Kirim response jika registrasi berhasil
            res.status(201).json({ message: "Registration successful", user: newUser });
        } catch (error) {
            // Tangani error jika ada
            res.status(500).json({ message: "Error registering user", error: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Temukan pengguna berdasarkan username
            const user = await User.findOne({ username });
            if (!user || user.password !== password) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            res.status(200).json({ message: "Login successful", user });
        } catch (error) {
            res.status(500).json({ message: "Error logging in", error: error.message });
        }
    },
};

module.exports = authController;
