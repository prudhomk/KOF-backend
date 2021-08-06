import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import fighterController from './controllers/fighters.js';


const app = express();

app.use(express.json());
app.get('/', (req, res) => {res.send('hello');});

app.use(fighterController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
