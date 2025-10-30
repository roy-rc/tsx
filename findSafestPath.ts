// Tipo para representar una matriz de números
type Matrix = number[][];

// Versión optimizada en espacio - Solo usa O(n) en lugar de O(m*n)
function findSafestPathOptimized(dream: Matrix): number {
  if (!dream || dream.length === 0 || dream[0].length === 0) {
    return 0;
  }
  
  const m = dream.length;
  const n = dream[0].length;
  
  // Solo necesitamos una fila para los cálculos
  const dp = Array(n).fill(0);
  
  // Inicializar la primera fila
  dp[0] = dream[0][0];
  for (let j = 1; j < n; j++) {
    dp[j] = dp[j - 1] + dream[0][j];
  }
  
  // Procesar fila por fila
  for (let i = 1; i < m; i++) {
    dp[0] += dream[i][0]; // Primera columna
    
    for (let j = 1; j < n; j++) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + dream[i][j];
    }
  }
  
  return dp[n - 1];
}

// Probar versiones optimizadas
const dream = [
  [1, 5, 1],
  [1, 5, 1],
  [1, 1, 1],
];


console.log(`Versión optimizada en espacio: ${findSafestPathOptimized(dream)}`);


// Benchmarking para matrices grandes
console.log("\n--- Benchmark con matriz grande ---");
const largeDream = Array.from({ length: 100 }, () => 
  Array.from({ length: 100 }, () => Math.floor(Math.random() * 10) + 1)
);


console.time("Versión optimizada");
const result2 = findSafestPathOptimized(JSON.parse(JSON.stringify(largeDream)));
console.timeEnd("Versión optimizada");

// Función que devuelve tanto el costo como el camino
function findSafestPathWithRoute(dream: Matrix): { cost: number; path: [number, number][] } {
  if (!dream || dream.length === 0 || dream[0].length === 0) {
    return { cost: 0, path: [] };
  }
  
  const m = dream.length;
  const n = dream[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  dp[0][0] = dream[0][0];

  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + dream[0][j];
  }

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + dream[i][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + dream[i][j];
    }
  }

  // Reconstruir el camino
  const path: [number, number][] = [];
  let i = m - 1, j = n - 1;
  
  while (i > 0 || j > 0) {
    path.unshift([i, j]);
    
    if (i === 0) {
      j--;
    } else if (j === 0) {
      i--;
    } else {
      // Elegir el camino que vino del menor costo
      if (dp[i-1][j] < dp[i][j-1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  path.unshift([0, 0]);

  return { cost: dp[m-1][n-1], path };
}

console.log("\n--- Camino detallado ---");

const result = findSafestPathWithRoute(dream);
console.log(`Costo mínimo: ${result.cost}`);
console.log("Camino óptimo:");
result.path.forEach((pos, index) => {
  const [row, col] = pos;
  const value = dream[row][col];
  console.log(`  Paso ${index + 1}: (${row},${col}) -> valor: ${value}`);
});
