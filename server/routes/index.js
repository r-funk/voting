import { Router } from 'express';
import apiRoutes from './api';
const router = new Router();

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.render('index')
});

export default router;
