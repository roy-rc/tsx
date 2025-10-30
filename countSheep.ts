function countSheep(letters: string): number {
    // Validar entrada
    if (letters.length < 5) return 0;

    // Contar letras necesarias
    const counts = { s: 0, h: 0, e: 0, p: 0 };

    // Contar ocurrencias de cada letra
    for (const char of letters) {
        if (char in counts) {
            counts[char as keyof typeof counts]++;
        }
    }

    // Calcular el número máximo de ovejas completas
    return Math.min(counts.s, counts.h, Math.floor(counts.e / 2), counts.p);
}

const cant_sheep = countSheep("sshhheeeepppp");
console.log(cant_sheep);
