const numeroUno = parseInt(process.argv[2]);
const operador = process.argv[3];
const numeroDos = parseInt(process.argv[4]);

const caculadora = (numeroUno, operador, numeroDos) => {
    switch (operador) {
        case '+':
            return (numeroUno + numeroDos);
        case '-':
            return (numeroUno - numeroDos);
        case '*':
            return (numeroUno * numeroDos);
        case '/':
            const resultado = numeroUno / numeroDos;
            if (numeroDos === 0) {
                console.log("ERROR");
            }
            return resultado;
    }
}

console.log(caculadora(numeroUno, operador , numeroDos))
