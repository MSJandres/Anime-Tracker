import { Router } from "express";
import jinkanRoute from './animeInfoRoute.js';
import reviewRoute from './reviewRoute.js';
import { userRoute } from "./userRoutes.js";

const router = Router();
router.use('/user', userRoute)
router.use('/jinkan', jinkanRoute);
router.use('/reviews', reviewRoute);

export default router;