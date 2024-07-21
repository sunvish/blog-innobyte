import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:8999/api/signin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      if (response.status === 200 || response.status === 201) {
        setEmail("");
        setPassword("");
        navigate("/home");
      }
      console.log(response.data.token);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter email"
              id="email"
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
              placeholder="Enter password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-300 leading-tight bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
