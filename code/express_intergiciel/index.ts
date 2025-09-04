import express from "express";

const app = express();
const port = 3000;

function historique(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.log(`${req.method} ${req.url}`);
  next();
}

const historiqueParametre = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const nom = req.query.nom;
  console.log(nom);
  if (nom === "Etienne") {
    next();
  } else {
    res.status(404).send("Erreur");
  }
};

app.use(historique);
app.use(historiqueParametre);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

app.listen(port, () => console.log("serveur démaré"));
