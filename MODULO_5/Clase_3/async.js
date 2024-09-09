async function esperarSegundos(segundos) {

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Han pasado ${segundos} segundos.`);
            resolve();
        }, segundos * 1000); 
    });
}
(async () => {
    await esperarSegundos(2);
})();

export default esperarSegundos;