// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust to your backend URL

export const fetchBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};

export const fetchBookDetails = async (id) => {
  const response = await axios.get(`${API_URL}/books/${id}`);
  return response.data;
};
