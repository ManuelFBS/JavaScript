// La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
// letras del string, y su valor es la cantidad de veces que se repite en el string.
// Las letras deben estar en orden alfabético.
// [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
function numberOfCharacters(string) {
        let string1 = string.toLowerCase();
        string1 = string1.split('');
        string1.sort();
        string1 = string1.join('');
        const string2 = string1;
        let objetoString = {};
        let cont = 0;
        for (let i = 0; i < string2.length; i++) {
                for (let j = 0; j < string1.length; j++) {
                        if (string2[i] === string1[j]) {
                                cont++;
                                objetoString[string2[i]] = cont;
                        }
                }
                cont = 0;
        }
        return objetoString;
}

// const stringEjemplo = 'Esternocleidomastoideo';
const stringEjemplo = 'Acetilsalicilico';
let cantidadCaracteresEjemplo = numberOfCharacters(stringEjemplo);
console.log(cantidadCaracteresEjemplo);