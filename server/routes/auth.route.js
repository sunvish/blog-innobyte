import express from "express";

const authRouter = express.Router();


authRouter.get("/signup",signup)




export default authRouter