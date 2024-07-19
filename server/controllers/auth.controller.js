import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const isExistingUser = await userModel.findOne({ email });
  if (isExistingUser) {
    return res.json("Email already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await new userModel({
    username,
    email,
    password: hashedPassword,
  });

  newUser.save();

  res.status(201).json("user registered successfully");
};

export const signin = async (req,res)=>{
    const {  email, password } = req.body;
  const isExistingUser = await userModel.findOne({ email });
  if (!isExistingUser) {
    return res.json("no account registered with this email");
  }
  const hashedPassword =  bcrypt.compareSync(password,isExistingUser.password);
  

 

  res.status(201).json("user registered successfully");
}
