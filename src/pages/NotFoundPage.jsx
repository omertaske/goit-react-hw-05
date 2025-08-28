import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-500 text-white p-6">
      
      <h1 className="text-9xl font-extrabold mb-6 drop-shadow-lg animate-pulse">
        404
      </h1>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Oops! Page Not Found
      </h2>
      
      <p className="text-lg md:text-xl text-center mb-8 max-w-md">
        The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
      >
        Go Back Home
      </Link>

      <div className="mt-10 text-center text-sm opacity-80">
        If you think this is an error, contact support.
      </div>
      
    </div>
  );
};

export default NotFoundPage;
