import myModule from './part1.js';
import fs from 'fs';
import express from 'express';

// Escribir en un archivo
fs.writeFileSync('hello.txt', 'Hello, world!');
console.log('File written successfully');

// Módulo de servidor
const app = express();
app.get('/', (req, res) => {
    res.send(myModule.printVar()); // Cambiado para usar el módulo
});

app.listen(3000, () => {
    console.log('Task 3');
    console.log('Server is running on port 3000');
});

export { app };
