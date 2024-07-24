import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8999/api/getpost/${id}`,
          {
            headers: {
              token: localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
          }
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://blog-innobyte.onrender.com/api/getcomments/${id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://blog-innobyte.onrender.com/api/postcomment/${id}`,
        { text: newComment },
        {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleViewComments = () => {
    setShowComments(!showComments);
    if (!showComments) {
      fetchComments();
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          )}
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-400 mb-4">{post.body}</p>
          <p className="text-lg font-medium text-blue-400 mb-2">
            {post.authorName}
          </p>
          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <button
            onClick={handleViewComments}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
          >
            {showComments ? "Hide Comments" : "View Comments"}
          </button>
          {showComments && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Comments</h2>
              {comments.length > 0 ? (
                <ul className="space-y-4">
                  {comments.map((comment) => (
                    <li
                      key={comment._id}
                      className="bg-gray-700 p-4 rounded-lg"
                    >
                      <p className="text-xl font-semibold text-blue-300 mb-2">
                        {comment.userName}
                      </p>
                      <p className="text-lg text-gray-300">{comment.text}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments yet.</p>
              )}
              <form onSubmit={handleAddComment} className="mt-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-700 bg-gray-900 rounded-lg text-white mb-2"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Add Comment
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
