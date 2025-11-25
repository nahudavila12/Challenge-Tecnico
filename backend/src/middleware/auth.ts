import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-challenge-tecnico';

export interface AuthRequest extends Request {
  userId?: number;
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token invalido' });
    }

    if (decoded && typeof decoded === 'object' && 'userId' in decoded) {
      req.userId = decoded.userId as number;
      next();
    } else {
      return res.status(403).json({ error: 'Token invalido' });
    }
  });
};

