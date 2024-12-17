import { Router } from "express";
import jinkanRoute from './jinkanRoute.js';

const router = Router();
router.use('/jinkan', jinkanRoute);

export default router;