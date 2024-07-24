import React from "react";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-4xl font-bold hover:text-gray-300 transition-colors duration-300"
          >
            BlogEra
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/signup"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md  transition-colors duration-300"
            >
              Register 
            </Link>
            <Link
              to="/signin"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md  transition-colors duration-300"
            >
              Login 
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 flex-grow flex flex-col items-center justify-center text-center">
        <img className="w-full max-w-2xl mb-8 rounded-lg shadow-lg" />
        <h1 className="text-5xl font-extrabold mb-6">Dive into BlogEra 🌌</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Explore a universe of compelling stories and insightful articles.
          Whether you’re here to share your own adventures or delve into the
          latest trends, BlogEra is your gateway to a vibrant community of
          readers and writers. 📚🌠
        </p>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Join us today and start creating, discovering, and connecting. Your
          next great blog post or inspiring read awaits! 🚀✨
        </p>
        <Link
          to="/signup"
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg shadow-lg transition-colors duration-300"
        >
          Get Started 🎉
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
