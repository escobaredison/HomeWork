import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

// Base de datos
const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];
// Ruta para obtener todos los productos
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// Ruta para obtener un producto por su ID
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = students.find(s => s.id === id);
    if (estudiante) {
        res.status(200).json(estudiante);
    } else {
        res.status(404).json({ error: "Product not found" })
    }
});

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});