import { Router } from 'express';
import * as IdeasController from '../controllers/IdeasController';
const router = new Router();

router.get('/ideas', IdeasController.listIdeas);

export default router;
