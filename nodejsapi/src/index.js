import express from 'express';
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';
import HttpStatus from "./controller/users.controller.js";
import Response from './domain/response.js';
import usersRoutes from "./routes/users.route.js";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send(new Response(200, 'OK', 'API'))
})

app.all('*', (req, res) =>
  res.status(HttpStatus.NOT_FOUND.code).send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Route does not exist'))
)

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}:${PORT}`));
