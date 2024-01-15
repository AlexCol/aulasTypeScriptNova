import { Request, Response } from "express";

//+ Model
import { MovieModel } from "../model/Movie";

//+ Logger
import logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie);
    } catch (error) {
        let mensagem = 'Unknown Error';
        if (error instanceof Error) 
            mensagem = error.message;
        
        logger.error(mensagem);
        return res.status(500).send("Erro ao processar.");
    }
}

export async function findMovieByd(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if (!movie)
            return res.status(404).json({error: "O filme não existe"});

        return res.status(200).json(movie);
    } catch (error) {
        let mensagem = 'Unknown Error';
        if (error instanceof Error) 
            mensagem = error.message;
        
        logger.error(mensagem);
        return res.status(500).send("Erro ao processar.");
    }   
}

export async function getAllMovies(req: Request, res: Response) {
    
    try {
        const movies = await MovieModel.find();

        if (movies.length === 0)
            return res.status(404).json({error: "Nenhum filme cadastrado."});

        return res.status(200).send(movies);
    } catch (error) {
        let mensagem = 'Unknown Error';
        if (error instanceof Error) 
            mensagem = error.message;
        
        logger.error(mensagem);
        return res.status(500).send("Erro ao processar.");
    }       
}

export async function deleteMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id;        
        const movie = await MovieModel.findById(id);
        
        if (!movie)
            return res.status(404).json({error: "O filme não existe"});

        await movie.deleteOne();
        
        return res.status(201).send("Deletado");
    } catch (error) {
        let mensagem = 'Unknown Error';
        if (error instanceof Error) 
            mensagem = error.message;
        
        logger.error(mensagem);
        return res.status(500).send("Erro ao processar.");
    }   
}

export async function editMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);
        
        if (!movie)
            return res.status(404).json({error: "O filme não existe"});

        await MovieModel.updateOne({_id: id}, data);
        
        return res.status(200).send("Atualizado.");
    } catch (error) {
        let mensagem = 'Unknown Error';
        if (error instanceof Error) 
            mensagem = error.message;
        
        logger.error(mensagem);
        return res.status(500).send("Erro ao processar.");
    }   
}