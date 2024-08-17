// src/pages/BookDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetailsPage = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <h2 className="text-xl text-gray-600">by {book.author}</h2>
      <p className="mt-4">{book.description}</p>
      <div className="mt-4">
        <img src={book.cover} alt={book.title} className="w-64 h-auto" />
      </div>
    </div>
  );
};

export default BookDetailsPage;
