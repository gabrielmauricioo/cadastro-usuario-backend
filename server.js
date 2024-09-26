// server.js
import express from 'express';
import cors from 'cors';
import connectToDatabase from './db.js'; // Importa a função de conexão

const app = express();
app.use(express.json());
app.use(cors());

let db;

(async () => {
  db = await connectToDatabase(); // Conecta ao banco de dados
})();

app.post('/usuarios', async (req, res) => {
  try {
    const result = await db.collection('usuarios').insertOne(req.body); // Usa a conexão com o banco de dados
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
});

// Defina outros endpoints...

const PORT = process.env.PORT || 3000; // use a porta da Vercel ou 3000 localmente
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
