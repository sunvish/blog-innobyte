import postModel from "../models/post.model.js";

export const createPost = async (req, res) => {
  const { title, body, image, authorName } = req.body;
  const userId = req.userId;

  if (!title || !body || !authorName) {
    return res
      .status(400)
      .json({ message: "Title, body, and author name are required" });
  }

  try {
    const response = await postModel.create({
      title,
      body,
      image,
      authorName,
      userId,
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await postModel.findById({ _id: postId });

    if (!post || post.length === 0) {
      return res.status(404).json({ message: "Posts not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPost = await postModel.findOneAndDelete({ _id: id });

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  const postId = req.params.id;

  const { title, body, image, authorName } = req.body;

  if (!title || !body || !authorName) {
    return res
      .status(400)
      .json({ message: "Title, body, and author name are required" });
  }

  try {
    const updatedPost = await postModel.findByIdAndUpdate(
      postId,
      { title, body, image, authorName },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const userId = req.userId;
   

    const post = await postModel.find({ userId: userId });

    if (!post || post.length === 0) {
      return res.status(404).json({ message: "Posts not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
