//Um endpoint simples para verificar se a conexão com o banco de dados está funcionando corretamente. 
//Pode ser acessado via uma requisição GET em /api/test-connection.

import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../src/utils/dbConnect';

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();
    res.status(200).json({ message: 'Conexão com o banco de dados estabelecida com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Falha ao conectar ao banco de dados', error });
  }
}
