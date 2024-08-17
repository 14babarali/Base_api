// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl">E-Library</Link>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
