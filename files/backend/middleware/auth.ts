import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  // Extract token from header and verify user, then attach user to request
  // Check roles as needed
  // ...
  next();
};
export default authMiddleware;