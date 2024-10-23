import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import './config/database.js';
import advertisersRouter from './routes/advertisers.js';
import ordersRouter from './routes/orders.js';
import mediaOwnersRouter from './routes/mediaOwners.js';
import productsRouter from './routes/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/advertisers', advertisersRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/mediaOwners', mediaOwnersRouter);
app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});