
import { v4 as uuidv4 } from 'uuid';

export interface Technology {
  id: string;
  title: string;
  studied: boolean;
  deadline?: Date;
  createdAt: Date;
}

export function createTechnology(title: string): Technology {
  return {
    id: uuidv4(),
    title,
    studied: false,
    deadline: new Date() ,
    createdAt: new Date()
  };
}
