//Define rotas relacionadas à autenticação, como registrar usuários (/api/auth/register).
//Cada rota está associada a um controlador que executa a lógica de negócios.

import type { NextApiRequest, NextApiResponse } from 'next';
import { registerUser } from '../controllers/authController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
  //Define a função handler como a exportação padrão deste módulo, que será usada como o manipulador de requisições da API.
  if (req.method === 'POST') {
    return registerUser(req, res);
  } else {
    
    res.status(405).json({ message: 'Método não permitido' });
  }
}


