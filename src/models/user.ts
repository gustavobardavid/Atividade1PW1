import { v4 as uuidv4 } from 'uuid';
import { Technology } from './technology';

export interface User {
  id: string;
  name: string;
  username: string;
  technologies: Technology[];
}

export function createUser(name: string, username: string): User {
  return {
    id: uuidv4(),
    name,
    username,
    technologies: []
  };
}
