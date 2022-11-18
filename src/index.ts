import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => console.log('Conectado com sucesso!'))
  .catch(() => console.log(Error));

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
