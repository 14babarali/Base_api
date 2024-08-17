// src/components/BookCard.jsx
import React from 'react';

const BookCard = ({ book }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img src={book.cover} alt={book.title} className="w-full h-48 object-cover" />
    <h2 className="text-xl font-semibold mt-2">{book.title}</h2>
    <p className="text-gray-600">{book.author}</p>
    <a href={`/books/${book.id}`} className="text-blue-500">Read more</a>
  </div>
);

export default BookCard;
