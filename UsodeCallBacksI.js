function modify(array, callback) {
        // Hacemos algo...
        array.push('Myra');
        // Después de hacer algo...
        // callback(array);
        setTimeout(function() {
                callback(array);
        }, 3000);     // Aplicando un retardo en la ejecución del 'callback'...
}

const names = [ 'Trina', 'Manuel', 'Marcos' ];

modify(names, function(array) {
        console.log(array);
        console.log('He modificado el array y ahora es de ' + array.length + ' elementos !')
});

names.map(name => {
        console.log(name);
});