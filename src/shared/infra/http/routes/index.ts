import express from 'express';
import routesSell from './sell.routes';

const routes = express.Router();

routes.use('/home', routesSell);

export default routes;