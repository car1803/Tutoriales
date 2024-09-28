// Arreglos
let numeros = [1, 2, 3, 4, 5]; // Un arreglo de números
let mezclado = [1, "hola", true, [2, 3], { clave: "valor" }]; // Un arreglo que almacena distintos tipos de datos

// Los arreglos son mutables
numeros[0] = 10; // Cambiamos el primer valor del arreglo
console.log(`Arreglo modificado: ${JSON.stringify(numeros)}`);

// Arreglos que contienen otros arreglos (Matriz)
let matriz = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(`Elemento en la posición [1][1] de la matriz: ${matriz[1][1]}`); // Accedemos al valor 4

// Métodos comunes de arreglos
numeros.push(14); // Añade un elemento al final
console.log(`Después de push(6): ${JSON.stringify(numeros)}`);

let eliminado = numeros.pop(); // Elimina el último elemento
console.log(`Elemento eliminado: ${eliminado}, Arreglo actual: ${JSON.stringify(numeros)}`);

numeros.unshift(0); // Añade un elemento al principio
console.log(`Después de unshift(0): ${JSON.stringify(numeros)}`);

eliminado = numeros.shift(); // Elimina el primer elemento
console.log(`Elemento eliminado: ${eliminado}, Arreglo actual: ${JSON.stringify(numeros)}`);

// Eliminar elementos y opcionalmente reemplazarlos
numeros.splice(1, 2, 8, 9); // Elimina 2 elementos desde el índice 1 y los reemplaza con 8, 9
console.log(`Después de splice(1, 2, 8, 9): ${JSON.stringify(numeros)}`);

// Copiar valores de un arreglo a otro sin modificar el original
let copiaParcial = numeros.slice(1, 3); // Copia de [1,3) (sin incluir el índice 3)
console.log(`Copia parcial: ${JSON.stringify(copiaParcial)}, Arreglo original: ${JSON.stringify(numeros)}`);

// Concatenar dos arreglos
let masNumeros = [10, 11];
let concatenado = numeros.concat(masNumeros);
console.log(`Arreglo concatenado: ${JSON.stringify(concatenado)}`);

// Obtener el índice de un elemento
let indice = concatenado.indexOf(9); // Busca el índice del elemento 9
console.log(`El índice del valor 9 es: ${indice}`);

// Buscar el mayor y menor valor en un arreglo
let maximo = Math.max.apply(null, concatenado); // Math.max con apply
let minimo = Math.min.apply(null, concatenado); // Usando la notación rest
console.log(`Valor máximo: ${maximo}, Valor mínimo: ${minimo}`);

let arreglo  = concatenado.map((elemento) => elemento * 2); // Multiplicamos por 2 cada elemento con map
// Sumar todos los elementos con reduce
let sumaTotal = concatenado.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(`Suma total de los elementos: ${sumaTotal}`);

// Mostrar el arreglo en formato JSON
console.log(`Arreglo en formato JSON: ${JSON.stringify(concatenado)}`);

// Asignación de valores a múltiples variables
let [a, b, , , c] = [1, 2, 3, 4, 5];
console.log(`Valores asignados: a = ${a}, b = ${b}, c = ${c}`);

// Intercambiar valores de variables
[a, b] = [b, a];
console.log(`Después de intercambiar: a = ${a}, b = ${b}`);

// Usar el operador rest para guardar el resto de los elementos en un arreglo
let [x, y, ...resto] = [1, 2, 3, 4, 5, 6];
console.log(`x = ${x}, y = ${y}, resto = ${JSON.stringify(resto)}`);

// Copiar todo un arreglo usando spread operator
let copiaArreglo = [...concatenado];
console.log(`Copia completa del arreglo: ${JSON.stringify(copiaArreglo)}`);
