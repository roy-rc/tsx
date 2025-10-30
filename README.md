# 🚀 Aprendiendo TypeScript

Repositorio personal para practicar y aprender TypeScript con ejemplos prácticos.

## 📋 Contenido

Este repositorio contiene diferentes ejemplos de TypeScript organizados por temas:

### 📁 Archivos de Práctica

| Archivo | Descripción | Conceptos |
|---------|-------------|-----------|
| `reverse.ts` | Función que invierte las letras de cada palabra | Strings, Arrays, Spread Operator |
| `ejemplo-tipos.ts` | Tipos básicos de TypeScript | Types, Interfaces, Optional Properties |
| `countSheep.ts` | Contador de ovejas basado en letras disponibles | Loops, Switch, Math.min, String manipulation |
| `findSafestPath.ts` | Encuentra el camino más seguro en una matriz | Dynamic Programming, 2D Arrays, Math.min |
| `viernes13.ts` | Encuentra todos los viernes 13 en un año dado | Date objects, Arrays, Loops, ISO strings |
| `searchPhone.ts` | Búsqueda binaria en array de números de teléfono | Binary Search, Algorithm Optimization, Input Validation |


## 🛠️ Configuración del Entorno

### Prerrequisitos
- Node.js instalado
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <tu-repo-url>
cd <nombre-del-repo>

# Instalar dependencias
npm install

# O instalar tsx globalmente
npm install -g tsx
```

### Dependencias
- **tsx**: Para ejecutar archivos TypeScript directamente
- **typescript**: Compilador de TypeScript

## 🚀 Cómo Ejecutar los Ejemplos

### Opción 1: Con tsx (Recomendado)
```bash
# Ejecutar cualquier archivo TypeScript
tsx archivo.ts

# Ejemplo:
tsx reverse.ts
tsx ejemplo-tipos.ts
tsx countSheep.ts
tsx findSafestPath.ts
tsx viernes13.ts
tsx searchPhone.ts
```

### Opción 2: Con npm scripts
```bash
# Ejecutar con npm
npm run ts archivo.ts
```

### Opción 3: Watch Mode (Para desarrollo)
```bash
# Ejecutar en modo watch (se ejecuta automáticamente al guardar)
tsx --watch archivo.ts
```

### Opción 4: Solo verificar errores
```bash
# Verificar errores sin ejecutar
tsc --noEmit archivo.ts
```

## 📚 Ejemplos por Tema

### 🔤 Manipulación de Strings (`reverse.ts`)
Función que decodifica mensajes invirtiendo cada palabra:
```typescript
function translatePossessed(message: string): string {
  if(message.trim() === "") return ""
  return message.split(" ").map(palabra => [...palabra].reverse().join("")).join(" ")
}
```
- **Input:** `"i yojne gnihctaw uoy"`
- **Output:** `"i enjoy watching you"`

### 📝 Tipos Básicos (`ejemplo-tipos.ts`)
- Tipos primitivos (string, number, boolean)
- Arrays
- Interfaces
- Propiedades opcionales
- Funciones con tipos

### 🐑 Contador de Ovejas (`countSheep.ts`)
Función que cuenta cuántas ovejas se pueden formar con las letras disponibles:
```typescript
function countSheep(letters: string): number {
  if (letters.length === 0 || letters.length < 5) return 0;
  // Cuenta ocurrencias de cada letra necesaria para "sheep"
  // Retorna el mínimo número de ovejas posibles
}
```
- **Input:** `"ssshhheeeeeepppp"`
- **Output:** `3` (se pueden formar 3 palabras "sheep")
- **Conceptos:** Switch statements, Math.min, conteo de caracteres

### 🛣️ Camino Más Seguro (`findSafestPath.ts`)
Algoritmo de programación dinámica para encontrar el camino con menor riesgo en una matriz:
```typescript
function findSafestPath(dream: number[][]): number {
  // Usa programación dinámica para encontrar el camino mínimo
  // desde esquina superior izquierda hasta inferior derecha
}
```
- **Input:** `[[1,3,1],[1,5,1],[4,2,1]]`
- **Output:** `7` (camino: 1→3→1→1→1)
- **Conceptos:** Programación dinámica, matrices 2D, optimización de rutas

### 📅 Viernes 13 (`viernes13.ts`)
Función que encuentra todos los viernes 13 en un año específico:
```typescript
function myersCalendar(year: number): string[] {
  // Valida el año y busca todos los días 13 que caen en viernes
  // Retorna las fechas en formato ISO (YYYY-MM-DD)
}
```
- **Input:** `2025`
- **Output:** `['2025-06-13', '2025-10-31']` (viernes 13 + Halloween especial)
- **Conceptos:** Date objects, validación de tipos, formateo ISO, loops

### 📞 Búsqueda de Teléfonos (`searchPhone.ts`)
Implementación de búsqueda binaria para encontrar números de teléfono en un array ordenado:
```typescript
function searchPhone(phones: number[], target: number): number {
  // Implementa búsqueda binaria con validación de entrada
  // Optimizado para evitar overflow con arrays grandes
}
```
- **Input:** `[1001, 1002, 1005, 1008, 1010, 1015, 1020]`, target: `1020`
- **Output:** `6` (índice del teléfono encontrado)
- **Complejidad:** O(log n) - muy eficiente para arrays grandes
- **Conceptos:** Binary search, validación de entrada, prevención de overflow

## 🔧 Configuración TypeScript

El proyecto incluye:
- `tsconfig.json` - Configuración del compilador TypeScript
- `package.json` - Scripts y dependencias del proyecto

### Configuración Destacada
```json
{
  "compilerOptions": {
    "target": "ES2015",
    "downlevelIteration": true,  // Permite spread operator con strings
    "strict": false              // Para aprendizaje, menos restrictivo
  }
}
```

## 📖 Recursos de Aprendizaje

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TSX Documentation](https://github.com/esbuild-kit/tsx)

## 🎯 Objetivos de Aprendizaje

- [x] Configurar entorno TypeScript
- [x] Tipos básicos y primitivos
- [x] Interfaces y tipos personalizados
- [x] Manipulación de arrays y strings
- [x] Spread operator en TypeScript
- [ ] Clases y herencia
- [ ] Genéricos
- [ ] Módulos y imports/exports
- [ ] Decoradores
- [ ] Tipos avanzados (Union, Intersection, etc.)

## 🤝 Contribuir

Si encuentras algún error o tienes sugerencias:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ **¡Dale una estrella si este repositorio te ayuda en tu aprendizaje de TypeScript!** ⭐