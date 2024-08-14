//Gerencia a lógica de negócios. Aqui você define o que acontece quando diferentes rotas são chamadas.
//Contém funções para lidar com a autenticação, como registrar novos usuários, fazer login, etc.

import { NextApiRequest, NextApiResponse } from 'next';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';

export const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'O usuário já existe' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ email, password: hashedPassword, role });
  await newUser.save();

  res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
};