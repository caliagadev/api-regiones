import express, { Request, Response } from 'express';
import routes from './api/routes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
