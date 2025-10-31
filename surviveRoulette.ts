function surviveRoulette(n: number, k: number): number {
    // Validate inputs
    if (typeof n !== 'number' || typeof k !== 'number' || n < 1 || k < 1 || !Number.isInteger(n) || !Number.isInteger(k)) {
        return -1; // Invalid input
    }
    // Initialize array of survivors
    let survivors = Array.from({ length: n }, (_, i) => i);
    let index = 0;
    // Eliminate every k-th person
    while (survivors.length > 1) {
        index = (index + k - 1) % survivors.length;
        survivors.splice(index, 1);
    }
    return survivors[0];
}

console.log(surviveRoulette(7,3));
