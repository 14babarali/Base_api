// src/pages/UserProfilePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/user/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="mt-2 text-gray-600">{user.email}</p>
      <p className="mt-2">Phone: {user.phone}</p>
      <div className="mt-4">
        <img src={user.profilePicture} alt={user.name} className="w-32 h-32 rounded-full" />
      </div>
    </div>
  );
};

export default UserProfilePage;
