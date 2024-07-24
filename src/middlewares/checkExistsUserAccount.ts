
import { Request, Response, NextFunction } from 'express';
import { users } from "../db/db";

export const checkExistsUserAccount = (req: Request, res: Response, next: NextFunction): void => {
  const userName = req.params.username; 
  const userEncontrado = users.find(u => u.username === userName);
    
  if (!userEncontrado) {
    res.status(404).json({ message: 'User not exists.' });
    return;
  } 

  req.body.user = userEncontrado;
  next();
};
