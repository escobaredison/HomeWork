import http from 'http';
import 'dotenv/config'; 

const port = process.env.PORT;
// Arreglo o base de datos
const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];
// Crear el servidor
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json"); // Establecer el contenido como JSON
    // Utilizamos switch para manejar las rutas
    switch (true) {
        case req.url === "/products" && req.method === "GET":
            res.writeHead(200);
            res.end(JSON.stringify(products));
            break;
        case req.url.startsWith("/products/") && req.method === "GET":
            const id = parseInt(req.url.split("/")[2]);
            const product = products.find(p => p.id === id);
            if (product) {
                res.writeHead(200);
                res.end(JSON.stringify(product));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ error: "Product not found" }));
            }
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Error 404: Not found');
            break;
    }
});
// Iniciar el servidor en el puerto indicado
server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
