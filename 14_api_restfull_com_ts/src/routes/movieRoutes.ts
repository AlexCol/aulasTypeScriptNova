import { Router } from "express";
import {
    createMovie, deleteMovieById, editMovie, findMovieByd, getAllMovies
} from '../controllers/movieController'
import { validate } from "../middleware/validators";
import { movieCreateValidation } from "../middleware/validators/movieValidator";

const movieRouter = Router();

movieRouter.get('/:id', findMovieByd);
movieRouter.get('/', getAllMovies);
movieRouter.post('/', movieCreateValidation(), validate, createMovie);
movieRouter.patch('/:id', editMovie);
movieRouter.delete('/:id', deleteMovieById);



export default movieRouter;