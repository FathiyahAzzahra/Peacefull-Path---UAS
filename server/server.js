const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // untuk mengakses file secara dinamis
const authRoutes = require("./routes/authRoutes");
const app = express();

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Konfigurasi static files dari folder client
app.use(express.static(path.join(__dirname, "../client")));

// Route untuk halaman utama
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

// Rute API untuk autentikasi
app.use("/api", authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const pool = require("./config/db");

const createUsersTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `);
        console.log("Table 'users' created successfully!");
    } catch (err) {
        console.error("Error creating table:", err.stack);
    }
};

// Panggil fungsi untuk membuat tabel saat server berjalan
createUsersTable();

