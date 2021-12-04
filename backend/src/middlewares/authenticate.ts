import { Request, Response, NextFunction } from "express";

export default function authenticate(req: Request, res: Response, next: NextFunction){
  const headerToken = req.headers.authorization?.split(" ");

  return next();
}