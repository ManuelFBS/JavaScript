function capToFront(string) {
        // Recibes un string con algunas letras en mayúscula y otras en minúscula.
        // Debes enviar todas las letras en mayúscula al comienzo del string.
        // Retornar el string.
        // [EJEMPLO]: soyHENRY ---> HENRYsoy
        // Tu código:
        const mayusculas = /[A-Z]/g;
        const minusculas = /[a-z]/g;
        let irComienzo = string.match(mayusculas).join('') + string.match(minusculas).join('');
        return irComienzo;
}

const str = 'eresSABIO';
let invertirMinMay = capToFront(str);
console.log(invertirMinMay);