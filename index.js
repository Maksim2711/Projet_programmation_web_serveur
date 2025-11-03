import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import connexion from './config/connexion.js';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ENV = dotenv.config().parsed;
const PORT = ENV.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express!');
});

app.listen(PORT, () => {
  console.log(`Le serveur depare sur le port ${PORT}`);
});