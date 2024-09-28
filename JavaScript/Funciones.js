// Funciones tradicionales
function suma(a, b) {
    // Los parámetros a y b son los que la función espera recibir
    return a + b; // El valor de retorno de la función, finaliza su ejecución
}
  
let resultado = suma(3, 5); // Llamamos a la función y pasamos 3 y 5 como argumentos
console.log(`Resultado de suma(3, 5): ${resultado}`); // Muestra 8

// Función con parámetros por defecto
function saludar(nombre = "Usuario") {
return `Hola, ${nombre}!`;
}

console.log(saludar()); // Si no se pasa un argumento, se usa el valor por defecto "Usuario"
console.log(saludar("Carlos")); // Llamada con argumento, se usa "Carlos"

// Funciones recursivas (reemplazo de bucles)
function factorial(n) {
if (n === 0) return 1; // Caso base
return n * factorial(n - 1); // Llamada recursiva
}

console.log(`Factorial de 5: ${factorial(5)}`); // Muestra 120

// Funciones flecha
const multiplicar = (a, b) => a * b; // Definición de una función flecha para multiplicar dos números
console.log(`Multiplicación de 3 * 4: ${multiplicar(3, 4)}`); // Muestra 12

// Función flecha con múltiples líneas
const saludoCompleto = (nombre, apellido) => {
let mensaje = `Hola, ${nombre} ${apellido}!`;
return mensaje;
};

console.log(saludoCompleto("Juan", "Pérez")); // Muestra "Hola, Juan Pérez!"
