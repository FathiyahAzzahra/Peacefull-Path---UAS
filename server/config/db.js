const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres", // Ganti dengan username PostgreSQL Anda
    host: "localhost",
    database: "peacefull_path",   // Ganti dengan nama database Anda
    password: "fannyevaline", // Ganti dengan password PostgreSQL Anda
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error("Error connecting to the database", err.stack);
    }
    console.log("Database connected successfully!");
    release(); // Jangan lupa untuk melepaskan koneksi setelah mengetesnya
});


module.exports = pool;
