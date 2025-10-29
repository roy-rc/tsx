function countSheep(letters: string): number {
    // validar length de letters
    if (letters.length === 0 || letters.length < 5) return 0;
    // contar ocurrencias de "sheep"
    let count_s = 0, count_h = 0, count_e = 0, count_p = 0;
    letters.split("").map(char => {
    switch (char) {
        case "s":
            count_s++;
            break;
        case "h":
            count_h++;
            break;
        case "e":      
            count_e++;
            break;
        case "p":
            count_p++;
            break;
    }
    });
    count_e = Math.floor(count_e / 2);
    // el numero de ovejas es el minimo de las ocurrencias de cada letra
    return Math.min(count_s, count_h, count_e, count_p);
}

const cant_sheep = countSheep("ssshhheeeeeepppp");
console.log(cant_sheep);
