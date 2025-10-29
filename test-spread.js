// Pruebas con spread operator
const palabra = "hola";

console.log("=== SPREAD OPERATOR ===");
console.log("String original:", palabra);
console.log("Con spread:", [...palabra]);
console.log("Reversed con spread:", [...palabra].reverse());
console.log("Joined:", [...palabra].reverse().join(""));

console.log("\n=== SPLIT METHOD ===");
console.log("Con split:", palabra.split(""));
console.log("Reversed con split:", palabra.split("").reverse());
console.log("Joined:", palabra.split("").reverse().join(""));

console.log("\n=== AMBOS DAN EL MISMO RESULTADO ===");
console.log("Spread result:", [...palabra].reverse().join(""));
console.log("Split result:", palabra.split("").reverse().join(""));
console.log("Son iguales?", [...palabra].reverse().join("") === palabra.split("").reverse().join(""));