import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import connexion from './config/connexion.js';

import clientRoute from './routes/clientRoute.js';
import departmentRoute from './routes/departmentRoute.js';
import employeeRoute from './routes/employeeRoute.js';
import projectRoute from './routes/projectRoute.js';
import invoiceRoute from './routes/invoiceRoute.js';
import contractRoute from './routes/contractRoute.js';



dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connexion.sync({ alter: true });
const ENV = dotenv.config().parsed;
const PORT = ENV.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express!');
});

app.use('/api/clients', clientRoute);
app.use('/api/departments', departmentRoute);
app.use('/api/employees', employeeRoute);
app.use('/api/projects', projectRoute);
app.use('/api/invoices', invoiceRoute);
app.use('/api/contracts', contractRoute);


app.listen(PORT, () => {
  console.log(`Le serveur demarre sur le port ${PORT}`);
});