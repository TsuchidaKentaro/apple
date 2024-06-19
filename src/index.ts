import express, { Request, Response } from 'express';
import anotherRoute from './another';
import next from './next';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('TSで出力されてるよ。なう');
});

app.use('/another', anotherRoute);
app.use('/next', next);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
