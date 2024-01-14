import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

export default async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        logger.info("Conectou");

    } catch (e) {
        logger.error("Não foi possível conectar.");
        logger.error(`Erro: ${e}`)
    }
}
