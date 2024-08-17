// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';
import BookCard from '../components/BookCard';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const books = await fetchBooks();
      setBooks(books);
    };
    loadBooks();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default HomePage;
