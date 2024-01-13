// src/controllers/userController.ts
import express, { Request, Response } from 'express';

const router = express.Router();

export const getAllUsers = (req: Request, res: Response) => {
  // Lógica para obter todos os usuários
  res.json({ message: 'List of users' });
};
router.get('/', getAllUsers);

export const getUserById = (req: Request, res: Response) => {
  // Lógica para obter um usuário por ID
  res.json({ message: 'User details by ID' });
};
router.get('/:id', getUserById);

export const createUser = (req: Request, res: Response) => {
  // Lógica para criar um novo usuário
  res.json({ message: 'User created successfully' });
};
router.post('/', createUser);

export const updateUser = (req: Request, res: Response) => {
  // Lógica para atualizar um usuário por ID
  res.json({ message: 'User updated successfully' });
};
router.put('/:id', updateUser);

export const deleteUser = (req: Request, res: Response) => {
  // Lógica para excluir um usuário por ID
  res.json({ message: 'User deleted successfully' });
};
router.delete('/:id', deleteUser);

const userRouter2 = express.Router();
export default userRouter2.use('/users2', router);