# JavaScript Scope Demo

Este proyecto tiene como objetivo mostrar cómo funciona la visibilidad de variables (scope) en JavaScript mediante varios ejemplos prácticos. A continuación se detallan los ejemplos y cómo funcionan:

## 1. **Scope Global vs Local**
Este ejemplo muestra la diferencia entre las variables definidas en el ámbito global y las variables dentro de funciones locales.

## 2. **Scope en Loops (Bucle `for`)**
Comparación entre `var` y `let` dentro de un bucle `for`.
- **`var`**: La variable es accesible fuera del bucle, causando problemas de alcance.
- **`let`**: La variable está limitada al ámbito del bucle.

## 3. **Scope en Funciones Anidadas**
Este ejemplo muestra cómo las funciones anidadas pueden acceder a las variables definidas en las funciones externas debido al mecanismo de **closure** en JavaScript.

## ¿Cómo funciona el proyecto?

1. **`ScopeDemo.js`**: Demuestra cómo las variables pueden tener diferentes alcances dependiendo de su contexto (global o local).
2. **`LoopScopeDemo.js`**: Muestra cómo los valores de las variables cambian cuando se usan `let` y `var` dentro de un bucle.
3. **`NestedFunctionScope.js`**: Muestra cómo el **scope** de las funciones anidadas puede acceder a las variables definidas fuera de ellas.

## ¿Cómo probarlo?

1. Abre el proyecto en tu editor de código preferido.
2. Ejecuta el proyecto (`npm start` o `yarn start`).
3. Interactúa con los botones y observa cómo las variables cambian dependiendo de su ámbito (scope).
