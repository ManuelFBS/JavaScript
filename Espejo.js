function asAmirror(frase) {
        // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
        // La diferencia es que cada palabra estará escrita al inverso.
        // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
        // Tu código:
        let separacionDePalabras = frase.split(' ');
        let palabrasInvertidas = [];
        let nuevaFrase = [];        
        //
        String.prototype.reverse = function() {
                var stringInv = [];
                for (var i = this.length - 1; i >= 0; i--) {
                  stringInv.push(this[i]);
                }
                return stringInv.join('');
        }
        // String.prototype.reverse = function() {
        //         arr = this.split('');
        //         arr.reverse();
        //         arrFinal = arr.join('');
        //         return arrFinal;
        // }
        for (let i = 0; i < separacionDePalabras.length; i++) {
                palabrasInvertidas.push(separacionDePalabras[i].reverse());
        }
        nuevaFrase = palabrasInvertidas.join(' ');
        //
        return nuevaFrase;
}

fraseTest = 'Esta es la prueba final de la función';
let mirror = asAmirror(fraseTest);
console.log(mirror);