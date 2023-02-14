function numeroSimetrico(num) {
        // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
        // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
        // Un número es simétrico cuando es igual a su reverso.
        // Ej:
        // numeroSimetrico(11711) devuelve true
      
        // Tu código:      
        const capicua = (numero) => {
          let numeroStr = numero.toString();
          return numeroStr.split("").reverse().join("") === numero.toString();
        }
        return capicua(num);
}

// const numero = 2458;
const numero = 328823;
let capicua = numeroSimetrico(numero);
console.log(capicua);