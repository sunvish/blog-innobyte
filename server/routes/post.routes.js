import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
  getUserPosts,
} from "../controllers/post.controller.js";
import { authMiddleware } from "../auth.middleware.js";

const postRouter = express.Router();

postRouter.post("/createpost", authMiddleware, createPost);
postRouter.get("/getposts", authMiddleware, getPosts);
postRouter.get(`/getpost/:id`, authMiddleware, getPost);
postRouter.get(`/getuserposts`, authMiddleware, getUserPosts);
postRouter.delete(`/deletepost/:id`, authMiddleware, deletePost);
postRouter.put(`/editpost/:id`, authMiddleware, editPost);


export default postRouter;
