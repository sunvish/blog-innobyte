import express from "express";
import { addComment, getComments } from "../controllers/comment.controller.js";
import { authMiddleware } from "../auth.middleware.js";

const commentRouter = express.Router();

commentRouter.post("/postcomment/:id", authMiddleware, addComment);
commentRouter.get("/getcomments/:id", authMiddleware, getComments);

export default commentRouter;
