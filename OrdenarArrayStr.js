// [3, 6, 2, 4, 1, 5]  -------> [1, 2, 3, 4, 5, 6]
// let array = [3, 6, 2, 4, 1, 5];
const array = [ 
        'Casa', 'Dos', 'Cuarentena', 'Canción', 'Mas', 'Extraordinario', 'Automóvil' 
];
// const array = [ "You", "are", "beautiful", "looking" ];
let aux;
for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
                if (array[i].length > array[j].length) {
                        aux = array[i];
                        array[i] = array[j];
                        array[j] = aux;
                }
        }
}

console.log(array);