import * as http from 'node:http';

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  console.log(req.url);
  var page = req.url ? req.url : '/';
  if (page == '/') {
    res.write(
      "Bienvenue au jeu d'évasion entrez dans la salle de regroupement."
    );
  } else if (page == '/salle-serveurs') {
    res.write('Vous êtes dans la salles des serveurs, bonne chance !');
  } else if (page == '/etage/1/prof') {
    res.write('Hé ho, que faîtes-vous dans mon bureau !?!?!');
  } else {
    res.statusCode = 404;
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
