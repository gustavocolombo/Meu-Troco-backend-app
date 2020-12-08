import express from 'express';
import routesSell from '@shared/infra/http/routes/routes.sell';

const routes = express.Router();

routes.use('/home', routesSell);

export default routes;