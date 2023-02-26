const numeros = [71, 41, 19, 88, 3, 65];

// const sumarDobles = (acumulador, numero) => {
//         acumulador.push(numero * 2);
//         return acumulador;
// };

// const sumarDobles = (acumulador, numero) => {
//         return [...acumulador, numero * 2];
// };

const sumarDobles = (acumulador, numero) => [...acumulador, numero * 2];

const dobles = numeros.reduce(sumarDobles, []);

console.log(dobles);
console.log(numeros);