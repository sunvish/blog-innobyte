import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use("/api", authRouter);

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
