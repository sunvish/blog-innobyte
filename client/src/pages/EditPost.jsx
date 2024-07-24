import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const editPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const id = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://blog-innobyte.onrender.com/api/editpost/${id.id}`,
        {
          title,
          body,
          image,
          authorName,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/profile");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-lg font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-700 bg-gray-900 rounded-lg text-white"
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-lg font-medium mb-1">
              Body
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-700 bg-gray-900 rounded-lg text-white"
            ></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-lg font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 bg-gray-900 rounded-lg text-white"
            />
          </div>
          <div>
            <label
              htmlFor="authorName"
              className="block text-lg font-medium mb-1"
            >
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-700 bg-gray-900 rounded-lg text-white"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
              onClick={() => {}}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default editPost;
