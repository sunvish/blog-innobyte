import commentModel from "../models/comment.model.js";
import userModel from "../models/user.model.js";

export const addComment = async (req, res) => {
  const { text } = req.body;
  const userId = req.userId;
  const postId = req.params.id;
 



  const user = await userModel.findById({ _id: userId });
  const userName = user.username;


  try {
    const newComment = new commentModel({ text, postId, userName });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Error adding comment" });
  }
};

export const getComments = async (req, res) => {
  const id = req.params.id;

  const comments = await commentModel.find({ postId: id });

  res.status(200).json(comments);
};
