// Operadores lógicos

let a = 5;
let b = '5';
let c = 10;

// == Compara si los elementos son iguales (no importa el tipo)
console.log(a == b); // true, porque 5 es igual a '5' en valor, pero no en tipo

// === Compara si los elementos son iguales y tienen el mismo tipo
console.log(a === b); // false, porque 'a' es número y 'b' es string

// != Compara si los elementos son diferentes (sin importar el tipo)
console.log(a != b); // false, porque son iguales en valor

// !== Compara si los elementos son diferentes y de distinto tipo
console.log(a !== b); // true, porque son de distinto tipo

// > Compara si un elemento es mayor que otro (sirve para caracteres alfabéticamente)
console.log(c > a); // true, porque 10 es mayor que 5

// >= Compara si un elemento es mayor o igual a otro
console.log(a >= 5); // true, porque 5 es igual a 5

// < Compara si un elemento es menor que otro (sirve para caracteres alfabéticamente)
console.log(a < c); // true, porque 5 es menor que 10

// <= Compara si un elemento es menor o igual a otro
console.log(c <= 10); // true, porque 10 es igual a 10

// && Verdadero cuando ambas condiciones son verdaderas
console.log(a < c && a == 5); // true, ambas son verdaderas

// || Verdadero cuando al menos una condición es verdadera
console.log(a == 5 || c == 20); // true, porque a es igual a 5

// ! Niega la expresión
console.log(((!(a == 5 && a>=20) || (true)) && ((false) || (false))) && (false)); // false, porque a es igual a 5, y la negación lo convierte en false

// Operadores condicionales

// if, else if, else
if (a === 5) {
  console.log("a es igual a 5 y es un número.");
} else if (a == 5) {
  console.log("a es igual a 5 pero es de distinto tipo.");
} else {
  console.log("a no es igual a 5.");
}

// switch
let fruta = 'manzana';
switch (fruta) {
  case 'manzana':
  case 'pera': // Se pueden agrupar varios casos
    console.log("La fruta es manzana o pera.");
    break;
  case 'naranja':
    console.log("La fruta es naranja.");
    break;
  default:
    console.log("Fruta desconocida.");
    break;
}

// Operador ternario
if (a<c){ let resultado = "a es menor que c"; } else { let resultado = "a no es menor que c"; }
let resultado = a < c ? "a es menor que c" : "a no es menor que c";
console.log(resultado); // "a es menor que c"

// Bucle while
let contador = 0;
while (contador <= 10) {
  if (contador == 8){
    break;
  }
  console.log(`Contador: ${contador}`);
  contador++; // Incrementa el valor del contador
}

// Bucle for
for (let i = 0; i < 5; i++) {
  console.log(`Iteración for: ${i}`);
}

// Bucle for anidado (para trabajar con estructuras multidimensionales)
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento matriz[${i}][${j}]: ${matriz[i][j]}`);
  }
}

for (let i in matriz){
  for (let j in matriz[i]){
    console.log(`Elemento matriz[${i}][${j}]: ${matriz[i][j]}`);
  }
}

// Bucle do while
let num = 0;
do {
  console.log(`Número en do while: ${num}`);
  num++;
} while (num < 0);
