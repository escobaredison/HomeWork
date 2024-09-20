import fs from 'fs';
// Creamos el bucle generador de numero de 1-1000
const generateNumbersFile = () => {
    let numero = '';
    for (let i = 1; i <= 1000; i++) {
        numero += i + '\n';
    }
// Creamos el archivo TXT
    fs.writeFile('numeros.txt', numero, (err) => {
        if (err) throw err;
        console.log('Archivo numeros.txt generado con éxito.');
    });
};
generateNumbersFile();