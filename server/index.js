import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

// mongodb connection

mongoose
  .connect(process.env.MONGO_uri)
  .then(
    app.listen(8999, () => console.log(`port runnning on ${process.env.PORT}`))
  )
  .catch((error) => console.log(error.message));
