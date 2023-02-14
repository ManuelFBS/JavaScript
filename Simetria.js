function numeroSimetrico(num) {
        // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
        // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
        // Un número es simétrico cuando es igual a su reverso.
        // Ej:
        // numeroSimetrico(11711) devuelve true
      
        // Tu código:
        let numString = numero.toString();
        let numStrSepar = numString.split('');
        let aux = [];
        let numRev;
        //
        for (let i = numStrSepar.length - 1; i >= 0; i--) {
                aux.push(numStrSepar[i]);
        }
        numRev = aux.join('');
        if (numString === numRev) return true;
        else return false;

        // return numRev;
}

// const numero = 2458;
const numero = 21212;
let numeroSim = numeroSimetrico(numero);

console.log(numeroSim);