function deObjetoAarray(objeto) {
        /* Recibes un objeto. Tendrás que crear un arreglo de arreglos.
           Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
           Estos elementos debe ser cada par clave:valor del objeto recibido.
           [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
           Tu código:*/

        // let array = [];
        // Object.entries(objeto).forEach(([key, value]) => { array.push(key + ': ' + value) } );
        // for (const [key, value] of Object.entries(objeto)) array.push(key + ': ' + value);        
        
        return Object.entries(objeto);
        // return array;
}

let objetoTest = { 'a': 3, 'b': 8, 'c': 15, 'd': 7, 'e': 12, 'f': 5, 'g': 7 };
let nuevoArray = deObjetoAarray(objetoTest);
console.log(nuevoArray);