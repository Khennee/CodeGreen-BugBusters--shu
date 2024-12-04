import jwt, { JwtPayload } from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  // console.log(token)
  if (!token) {
    res
      .status(401)
      .json({ title: "User Not Found", message: "Content Unavailable" });
    return;
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    ) as JwtPayload;
    // console.log(payload.userId)
    req.user = payload.userId;
    console.log(`UserId: ${req.user}`);
  } catch (error) {
    console.log(error);
    res
      .status(403)
      .json({ title: "Token Invalid", message: "Access has expired." });
    return;
  }
  next();
};

export default verifyToken;
