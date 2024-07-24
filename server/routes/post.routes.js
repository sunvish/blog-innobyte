import express from "express";
import {
  createPost,
  getPost,
  getPosts,
} from "../controllers/post.controller.js";
import { authMiddleware } from "../auth.middleware.js";

const postRouter = express.Router();

postRouter.post("/createpost", authMiddleware, createPost);
postRouter.get("/getposts", authMiddleware, getPosts);
postRouter.get(`/getpost`, authMiddleware, getPost);

export default postRouter;
