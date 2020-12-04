import express from 'express';
import UserController from '../controllers/UserController';

const routesSell = express.Router();
const userController = new UserController();

routesSell.post('/create-user', userController.create);

export default routesSell;