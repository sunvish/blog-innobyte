import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    res.json({ msg: "not authenticated" });
  }
  const userId = jwt.verify(token, process.env.SECRET_KEY);
  console.log(userId);

  req.userId = userId.id;
  next();
};
