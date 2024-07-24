
import { Request, Response } from 'express';
import { User, createUser } from '../models/user';
import { users } from "../db/db";
import { createTechnology, Technology } from '../models/technology';
import { v4 as uuidv4 } from 'uuid';

export const addUser = (req: Request, res: Response): void => {
  const { name, username } = req.body;

  if (!name || !username) {
    res.status(400).json({ message: 'Por favor, forneça nome e username.' });
    return;
  }
  const id = uuidv4();
  const newUser: User = createUser(name, username);
  users.push(newUser);

  res.status(201).json({ message: 'Usuário criado com sucesso.', user: newUser });
};

export const getAllUsers = (req: Request, res: Response): void => {
  res.status(200).json(users);
};

export const addTechnology = (req: Request, res: Response): void => {
  const username = req.params.username;
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ message: 'Por favor, forneça título.' });
    return;
  }

  const userIndex = users.findIndex(user => user.username === username);

  const newTechnology: Technology = createTechnology(title);
  users[userIndex].technologies.push(newTechnology);

  res.status(201).json({ message: 'Tecnologia adicionada com sucesso.', technology: newTechnology });
};

export const getTechnologiesByUsername = (req: Request, res: Response): void => {
  const { user } = req.body;
  
  if (!user) {
    res.status(404).json({ message: 'Usuário não encontrado.' });
  } else {
    res.status(200).json({ technologies: user.technologies });
  }

};

export const patchTechnologie = (req: Request, res: Response): void => {
  const { username, id } = req.params;
  const userIndex = users.findIndex(user => user.username === username);
  const technologyIndex = users[userIndex].technologies.findIndex(tech => tech.id === id);
  if (technologyIndex === -1) {
    res.status(404).json({ message: 'Tecnologia não encontrada.' });
    return;
  }
  users[userIndex].technologies[technologyIndex].studied = true;
  res.status(200).json({ message: 'Campo studied modificado com sucesso.', technology: users[userIndex].technologies[technologyIndex] });
}