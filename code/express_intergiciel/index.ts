import express from 'express';

const app = express();
const port = 3000;

function historique(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(historique);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => console.log('serveur démaré'));
