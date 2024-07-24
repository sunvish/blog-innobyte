import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8999/api/getpost", {
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      setPosts(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-2xl font-bold hover:text-gray-400"
          >
            Home
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/profile"
              className="text-white text-lg hover:text-gray-400"
            >
              Profile
            </Link>
            <Link to="/home" className="text-white text-lg hover:text-gray-400">
              Home
            </Link>
            <Link
              to="/create-post"
              className="text-white text-lg hover:text-gray-400"
            >
              Create Post
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link
              key={post._id}
              to={`/posts/${post._id}`}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">
                {post.body.length > 100
                  ? post.body.substring(0, 100) + "..."
                  : post.body}
              </p>
              <p className="text-lg font-medium text-blue-400 mb-2">
                {post.authorName}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mb-8">
          <Link to="/create-post">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
              Create New Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
