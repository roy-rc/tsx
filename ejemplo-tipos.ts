// Ejemplo de tipos básicos en TypeScript
function saludar(nombre: string): string {
    return `¡Hola, ${nombre}!`;
}

const edad: number = 25;
const esEstudiante: boolean = true;
const hobbies: string[] = ["programar", "leer", "correr"];

console.log(saludar("TypeScript"));
console.log(`Edad: ${edad}`);
console.log(`Es estudiante: ${esEstudiante}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);

// Interfaz
interface Persona {
    nombre: string;
    edad: number;
    activo?: boolean; // Propiedad opcional
}

const usuario: Persona = {
    nombre: "Ana",
    edad: 30,
    activo: true
};

console.log(`Usuario: ${usuario.nombre}, ${usuario.edad} años`);