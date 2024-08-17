const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    pages: { type: Number, required: true },
    category: { type: String, required: true }  // New category field added
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
