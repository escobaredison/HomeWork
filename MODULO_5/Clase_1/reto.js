const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];
// RETO (Opcional): Si quieres retarte te invitamos a crear 
// un programa que sea capaz de recorrer el array estudiantes 
// de el punto 2 y encontrar a el/la estudiante con el mayor promedio, 
// utilizando un bucle for o cualquer otro método visto en clase

let maxPromedio = estudiantes[0].promedio;  // Iniciar con el primer promedio
let mejorEstudiante = estudiantes[0];       // Iniciar con el primer estudiante

for (let i = 1; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > maxPromedio) {
        maxPromedio = estudiantes[i].promedio;
        mejorEstudiante = estudiantes[i];
    }
}

console.log(`El estudiante con el mayor promedio es ${mejorEstudiante.nombre} con un promedio de ${mejorEstudiante.promedio}.`);
// Salida: "El estudiante con el mayor promedio es Pablo con un promedio de 9.5."