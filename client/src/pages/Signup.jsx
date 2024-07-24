import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { username, email, password };

    try {
      const response = await axios.post(
        "https://blog-innobyte.onrender.com/api/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setResponseMessage(
          response.data.message || "Sign up successful! Redirecting..."
        );
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/signin");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "There was an error with the sign-up process. Please try again."
      );
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 leading-tight bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 leading-tight bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 leading-tight bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>
          {responseMessage && (
            <div className="mb-4 text-center text-green-400">
              {responseMessage}
            </div>
          )}
          {error && (
            <div className="mb-4 text-center text-red-400">{error}</div>
          )}
          <div className="text-center">
            <Link
              to="/signin"
              className="text-sm font-semibold text-gray-300 hover:text-red-500 transition duration-300"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
