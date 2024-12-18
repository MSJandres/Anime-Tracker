import { Router } from "express";
import jinkanRoute from './animeInfoRoute.js';
import reviewRoute from './reviewRoute.js';

const router = Router();
router.use('/jinkan', jinkanRoute);
router.use('/reviews', reviewRoute);

export default router;