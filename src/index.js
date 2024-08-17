require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js');


const bookRoutes = require('./routes/bookRoutes.js'); // Import routes
const app = express();
const URI = process.env.MONGODB_URI;

mongoose.connect(URI);
const database = mongoose.connection;

database.on('error', (err) => {
    console.log(err);
});

database.once('connected', () => {
    console.log('Database Connected to the server');
});

app.use(express.json());
app.use('/api', bookRoutes); // Use the routes
app.use('/api/users', userRoutes); // User-related routes

app.get('/', (req, res) => {
    res.send('Welcome to the Books API!');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
