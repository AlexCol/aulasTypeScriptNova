import { Router, Request, Response } from "express";
import movieRouter from './movieRoutes'

const router = Router();

router.use('/movie', movieRouter);


export default router;