import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    
    const isExistingUser = await userModel.findOne({ email });
    if (isExistingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });

   
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const isExistingUser = await userModel.findOne({ email });
    if (!isExistingUser) {
      return res
        .status(404)
        .json({ message: "No account registered with this email" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      isExistingUser.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }


    const token = jwt.sign({ id: isExistingUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
