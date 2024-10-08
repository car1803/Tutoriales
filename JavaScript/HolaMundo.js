// de una línea		
/* múltiples líneas*/ 
var impresion; // Declaración de variable

// Tipos de datos typeof elemento
/*
undefined: no existe valor asignado (valor por defecto de toda variable declarada)
null: valor nulo
boolean: true, false
string: cadenas de caracteres
bigint: representa enteros grandes
number: números
object: objeto 
*/

// Declaraciones con var, let, y const
var x = 10; //'var' permite declarar variables globales o de función y se puede redeclarar.
var x = 20; // Se puede redeclarar 'var' sin problema.

let y = 15; // 'let' permite declarar variables con alcance de bloque.
y = 25; // Puede cambiar el valor, pero no redeclarar en el mismo bloque.
// let y = 30; // Esto lanzaría un error, ya que no podemos redeclarar 'let' en el mismo ámbito.

if (true) {
    let z = "este es el valor de Z"; // 'let' sólo es accesible dentro de este bloque.
    var w = 10; // 'var' es accesible fuera del bloque.
}

const pi = 3.1416; // 'const' declara una constante cuyo valor no puede cambiar.
//pi = 3.15; // Esto lanzaría un error porque no se puede modificar una constante.
// Las constantes deben inicializarse al ser declaradas.

// Operaciones aritméticas
let a = 5, b = 3;
let suma = a + b;       // Suma
let resta = b - a;      // Resta
let producto = a * b;   // Producto
let division = a / b;   // División
let resto = a % b;      // Resto
let exponencial = a ** b; // Exponencial

a++; // Incremento, ahora a = 6
b--; // Decremento, ahora b = 2
b *= 3; // b = b * 3, ahora b = 6
console.log(`Suma: ${suma}, Resta: ${resta}, Producto: ${producto}, División: ${division}, Resto: ${resto}, Exponencial: ${exponencial}`);
console.log(`Incremento de a: ${a}, Decremento de b: ${b}`);

// Plantillas literales
let nombre = "Carlos";
let edad = 25;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
console.log(`La suma de 5 + 3 es: ${5 + 3}`);

// Operaciones con cadenas
let cadena1 = 'Hola, '; // Las cadenas son inmutables
let cadena2 = "mundo!";
let cadena3 = cadena1 + cadena2; // Concatenación de cadenas

console.log(`${cadena3}`);
console.log(`Longitud de la cadena: ${cadena3.length}`);

// Cortar una cadena
let subcadena = cadena3.substring(0, 3); // Corta "Hola, "
console.log(`Subcadena: ${subcadena}`);

// Reemplazar parte de una cadena
let cadenaReemplazada = cadena3.replace("mundo", "JavaScript");
console.log(`Cadena reemplazada: ${cadenaReemplazada}`);

// Acceder a un carácter
console.log(`El primer carácter de la cadena es: ${cadena3[0]}`);

// Secuencias de escape
let cadenaConEscapes = "Esto es una cadena con \" comillas dobles\" y comillas simples 'así'.";
console.log(cadenaConEscapes);

// Revertir una cadena
let cadenaRevertida = cadena3.split('').reverse().join('');
console.log(`Cadena revertida: ${cadenaRevertida}`);

s = "hola mundo";
s[0] = "H"; // No se puede modificar un carácter de una cadena
s = s.replace("h","H");
console.log(s);

