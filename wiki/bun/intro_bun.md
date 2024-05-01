# Introduction à Bun

## Qu'est-ce que Bun ?

Bun est un remplacement à node.js. Il utilise le moteur web-kit pour exécuter du code JavaScript et TypeScript. Il est plus rapide que node.js et permet de faire des applications web plus performantes.

## Installer Bun  

Pour installer Bun, il suffit de lancer la commande suivante :  

Linux et MacOS :  
```bash
curl -fsSL https://bun.sh/install | bash
```

Windows :
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

## Commandes Bun vs Node.js et npm

| Commande Node.js | Commande Bun |
|------------------|--------------|
| `node app.js`    | `bun app.js`  |  
| `npm install`    | `bun install` |  
| `npm start`      | `bun start`   |  
| `npm run dev`    | `bun run dev` |    
| `npx`            | `bunx`        |    

Pour plus d'informations, consultez la [documentation officielle de Bun](https://bun.sh/docs).




