function myersCalendar(year: number): string[] {
    //inicializar array de resultados
    let results: string[] = [];
    // Validar año
    if (typeof year !== 'number' || isNaN(year) || year < 1 || year > 9999) {
        // año inválido
        return [];
    } 

    for (let mes = 1; mes <= 12; mes++) {
        let fecha = new Date(year, mes - 1, 13);
        if (fecha.getDay() === 5) {
            results.push(fecha.toISOString().split('T')[0]);
        } 
        if (mes === 10) {
            results.push(new Date(year, mes - 1, 31).toISOString().split('T')[0]);
        }
    }
    return results;
}

console.log(myersCalendar(2025));