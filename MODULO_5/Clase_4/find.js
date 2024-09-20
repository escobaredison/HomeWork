import fs from 'fs';

const findEvenNumbers = () => {
    fs.readFile('numeros.txt', 'utf8', (err, data) => {
        if (err) throw err;
        // Recorremos el TXT, en busuqeda de los numeros Pares
        const numbersArray = data.split('\n');
        const evenNumbers = numbersArray.filter(numberString => {
            const numero = parseInt(numberString);
            return numero % 2 === 0;
        });
        // Mostramos los numeros pares
        console.log('Números pares:', evenNumbers);
        //Escribir los números pares en un archivo
        const evenNumbersString = evenNumbers.join('\n');
        fs.writeFile('numeros_pares.txt', evenNumbersString, (err) => {
            if (err) throw err;
            console.log('Archivo numeros_pares.txt generado con éxito.');
        });
    });
};

findEvenNumbers();
