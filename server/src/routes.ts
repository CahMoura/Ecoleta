import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsContrller = new PointsController();
const itemsContrller = new ItemsController();

routes.get('/items', itemsContrller.index);

routes.post('/points', pointsContrller.create);
routes.get('/points', pointsContrller.index);
routes.get('/points/:id', pointsContrller.show);

export default routes;