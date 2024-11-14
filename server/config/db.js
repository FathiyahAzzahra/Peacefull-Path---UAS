const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/peacefulpath')
    .then(() => {
        console.log('Database connected successfully!');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

module.exports = mongoose;
