import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },

  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "postModel",
    required: true,
  },
});

const commentModel = mongoose.model("commentModel", commentSchema);
export default commentModel;
