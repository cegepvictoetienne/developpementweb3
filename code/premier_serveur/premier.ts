import * as http from 'node:http';

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  // Le query est suivant le ?
  const query = req.url!.split('?')[1];
  var params = new URLSearchParams(query);

  if (params.has('prenom') && params.has('nom')) {
    res.write(
      'Vous vous appelez ' + params.get('prenom') + ' ' + params.get('nom')
    );
  } else {
    res.write('Vous devez bien avoir un prénom et un nom, non ?');
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
