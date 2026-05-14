import './config/db';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler';
import AppError from './utils/AppError';
import authRoutes from './routes/auth';

dotenv.config({ path: '../.env' });
const app = express();
const PORT = process.env.PORT_BACK || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.get('/', (_req, res) => {
  res.send('Forum API is running!');
});
app.get('/users', (_req, res) => {
  res.send('API Users work in progress.');
})
app.use((_req, _res) => {
  throw new AppError(404, 'Route non trouvée')
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


