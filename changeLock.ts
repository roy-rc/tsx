function changeLock(current: string, target: string): number {
    // validate inputs
    if(current.length !==4 || target.length !==4 || !/^\d{4}$/.test(current) || !/^\d{4}$/.test(target)){
        console.log("invalido");
        return 0;
    }

    let totalMoves = 0;
    for (let i = 0; i < 4; i++){
        const currentDigit = parseInt(current[i],10); // convertir caracter a número
        const targetDigit = parseInt(target[i],10); // convertir caracter a número
        const move = currentDigit - targetDigit;
        if (move < 0){
            totalMoves += move * -1 > 5 ? 10 + move : -move; // mover hacia adelante
        }else{
            totalMoves += move > 5 ? 10 - move : move; // mover hacia atrás
        }
    }

    return totalMoves;
}

console.log(changeLock('0022', '0044'))
// → 4
// Rueda 2: 2→4 (2 movimientos hacia adelante)
// Rueda 3: 2→4 (2 movimientos hacia adelante)
// Total: 2+2 = 4

console.log(changeLock('0000', '9999'))
// → 4
// Cada rueda: 0→9 (1 movimiento hacia atrás es más rápido que 9 hacia adelante)
// Total: 1+1+1+1 = 4

console.log(changeLock('1234', '5678'))
// → 16
// Rueda 0: 1→5 (4 movimientos)
// Rueda 1: 2→6 (4 movimientos)
// Rueda 2: 3→7 (4 movimientos)
// Rueda 3: 4→8 (4 movimientos)
// Total: 4+4+4+4 = 16

console.log(changeLock('0000', '0000'))
// → 0
// Ya estamos en el código objetivo

console.log(changeLock('1357', '2468'))
// → 4
// Rueda 0: 1→2 (1 movimiento)
// Rueda 1: 3→4 (1 movimiento)
// Rueda 2: 5→6 (1 movimiento)
// Rueda 3: 7→8 (1 movimiento)
// Total: 1+1+1+1 = 4

console.log(changeLock('9999', '0000'))
// → 4
// Cada rueda: 9→0 (1 movimiento hacia adelante es más rápido que 9 hacia atrás)
// Total: 1+1+1+1 = 4