# 🚀 Aprendiendo TypeScript

Repositorio personal para practicar y aprender TypeScript con ejemplos prácticos.

## 📋 Contenido

Este repositorio contiene diferentes ejemplos de TypeScript organizados por temas:

### 📁 Archivos de Práctica

| Archivo | Descripción | Conceptos |
|---------|-------------|-----------|
| `reverse.ts` | Función que invierte las letras de cada palabra | Strings, Arrays, Spread Operator |
| `ejemplo-tipos.ts` | Tipos básicos de TypeScript | Types, Interfaces, Optional Properties |

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