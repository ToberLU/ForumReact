import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import AppError from '../utils/AppError';

dotenv.config({ path: '../.env' });

declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}

export default function auth(req: Request, _res: Response, next: NextFunction) {
  if (!process.env.JWT_SECRET) {
    throw new AppError(500, 'JWT_SECRET not configured');
  }

  const authHeader = req.header('Authorization')
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError(401, 'Token manquant');
  }

  const token = authHeader.slice("Bearer ".length)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded as { id: string }
    next()
  } catch {
    throw new AppError(401, 'Token invalide ou expiré')
  }
}
