import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
