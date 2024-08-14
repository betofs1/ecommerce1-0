//Define a estrutura do documento User no MongoDB, incluindo campos como email, password, e role.
//Define os esquemas dos dados e interage com o banco de dados. Aqui você modela como os dados serão estruturados e armazenados no MongoDB.

import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document { 

  email: string;
  password: string;
  role: 'buyer' | 'seller';
}
  //define uma interface IUser que estende Document, especificando as propriedades email, password e role.
  //documents é unidade básica de armazenamento de dados armazenados em formato JSON

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['buyer', 'seller'], required: true },
});

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);

//SQL: Estrutura rígida e baseada em tabelas, ideal para dados altamente organizados e transações complexas.
//NoSQL: Estrutura flexível e diversificada, ideal para grandes volumes de dados não estruturados ou semi-estruturados e aplicações que requerem escalabilidade e agilidade.