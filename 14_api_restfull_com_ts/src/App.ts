//+ ENV VARIABLES
import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import config from "config";
import routes from './routes/router';
import db from '../config/db';
import logger from "../config/logger";
import middleware from "./middleware/morganMiddleware";

const app = express();

//JSON middleware
app.use(express.json());


//app minhaPorta (config)
const minhaPorta = config.get<number>("port");
app.use(middleware);//+deve ser usado ANTES da declaração das rotas

app.use('/api', routes);



app.listen(minhaPorta, async () => {
    await db();
    logger.info(`ouvindo porta ${minhaPorta}`)
});