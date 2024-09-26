// db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Acesse a variável de ambiente
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db('<dbname>'); // Substitua <dbname> pelo nome do seu banco de dados
    return db;
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error; // Lança o erro para que possa ser tratado em outro lugar
  }
}

export default connectToDatabase;
