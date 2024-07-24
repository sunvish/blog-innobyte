import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import postRouter from "./routes/post.routes.js";
import commentRouter from "./routes/comment.routes.js";

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api", authRouter);
app.use("/api", postRouter);
app.use("/api", commentRouter);

app.get("/", (req, res) => res.send("runnningngnngdkhjhs"));
// mongodb connection

mongoose
  .connect(process.env.MONGO_uri)
  .then(
    app.listen(process.env.PORT, () =>
      console.log(`port runnning on ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
