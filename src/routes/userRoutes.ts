import express, { Router } from 'express';
import { addUser, addTechnology, getAllUsers, getTechnologiesByUsername, patchTechnologie, putTechnologie } from '../controllers/userController';
import { checkExistsUserAccount } from '../middlewares/checkExistsUserAccount';
import { checkExistsUserName } from '../middlewares/checkExistsUserName';

const router: Router = express.Router();

router.post('/users', checkExistsUserName, addUser);

router.get('/users', getAllUsers);

router.post('/users/:username/technologies', checkExistsUserAccount, addTechnology);

router.get('/users/:username/technologies', checkExistsUserAccount, getTechnologiesByUsername);

router.patch('/users/:username/technologies/:id', checkExistsUserAccount, patchTechnologie);

router.put('/users/:username/technologies/:id', checkExistsUserAccount, putTechnologie);

export default router;
