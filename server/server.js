const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const authRoutes = require("./routes/authRoutes"); // Pastikan ini diimpor
require("./config/db"); // Mengimpor file db.js untuk koneksi MongoDB
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
app.use("/api", authRoutes); // Pastikan rute ini digunakan

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
