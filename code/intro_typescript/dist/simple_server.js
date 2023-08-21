"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const hostname = 'localhost';
const port = 8080;
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
