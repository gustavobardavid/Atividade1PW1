
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user';
import { users } from "../database/database";


export const checkExistsUserName = (req: Request, res: Response, next: NextFunction): void => {
  const userName = req.body.username; 
  const user = users.find(u => u.username === userName);
    
  if (user) {
    res.status(404).json({ message: 'Username já está em uso.' });
    return;
  }
  next();
};
