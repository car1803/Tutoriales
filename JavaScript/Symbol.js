// Ejemplo de creación de Symbol
let sym1 = Symbol('foo');  // Creamos un símbolo con descripción 'foo'
let sym2 = Symbol('foo');  // Creamos otro símbolo con la misma descripción 'foo'

console.log(sym1 === sym2); // false

// Explicación:
// Aunque ambos símbolos tienen la misma descripción ('foo'), son completamente únicos.
// Cada vez que se llama a Symbol(), se crea un símbolo nuevo y único.
// La descripción sirve solo como una etiqueta para el símbolo, pero no afecta su identidad.

// Creamos un objeto básico
let usuario = {
    nombre: 'Carlos',
    edad: 28
};

//Agregar propiedades únicas usando Symbol
let id = Symbol('id');  // Creamos un símbolo único para "id"
usuario[id] = 101;       // Asignamos una propiedad que no se sobrescribirá accidentalmente

//Crear otro símbolo similar (pero único) para demostrar unicidad
let otroId = Symbol('id');
usuario[otroId] = 202; // Esto es una propiedad completamente nueva y única

//Propiedades ocultas: las propiedades Symbol no aparecen en Object.keys() ni en for...in
console.log(Object.keys(usuario));    // ['nombre', 'edad']
console.log(Object.getOwnPropertySymbols(usuario)); // [Symbol(id), Symbol(id)]

// Accedemos a los valores de las propiedades Symbol
console.log(usuario[id]);      // 101
console.log(usuario[otroId]);  // 202

//Uso de Symbol.for para crear un símbolo global
let simboloGlobal1 = Symbol.for('token');
let simboloGlobal2 = Symbol.for('token'); // Ambos hacen referencia al mismo símbolo global
console.log(simboloGlobal1 === simboloGlobal2); // true

// Diferencia entre Symbol() y Symbol.for():
// - Symbol(): crea un símbolo único cada vez que se invoca, sin importar la descripción.
// - Symbol.for(): crea un símbolo en el registro global o devuelve el existente si ya fue creado con la misma clave.

// Agregamos una propiedad con símbolo global
usuario[simboloGlobal1] = 'mi-token-secreto';
console.log(usuario[simboloGlobal2]); // 'mi-token-secreto'
// Tanto symGlobal1 como symGlobal2 apuntan al mismo símbolo global, y por lo tanto a la misma propiedad.

//Uso de Symbol.toStringTag para personalizar la etiqueta del objeto
usuario[Symbol.toStringTag] = 'UsuarioAvanzado';
console.log(usuario.toString()); // [object UsuarioAvanzado]