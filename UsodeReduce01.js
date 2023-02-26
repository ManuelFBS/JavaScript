const numeros = [3, 10, 20, 50];
const arrayVacio = [];

// let sumaTotal = numeros.reduce((acumulador, numero) => {
//         return acumulador + numero;
// }, 0);

// let sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// let sumar = (acumulador, numero) => acumulador + numero;
// let sumaTotal = numeros.reduce(sumar, 0);

let sumar = (acumulador, numero) => acumulador + numero;

let sumaTotal1 = numeros.length > 0 ? numeros.reduce(sumar) : 0;
let sumaTotal2 = arrayVacio.length > 0 ? arrayVacio.reduce(sumar) : 0;

console.log(sumaTotal1);
console.log('');
console.log(sumaTotal2);