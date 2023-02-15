const productos = [ 
        { id: 'HFgsfYd43gR7pX0t', nombre: 'Camiseta', precio: 500 }, 
        { id: 'Bbw6547mD8hs34', nombre: 'Zapatos', precio: 2000 }, 
        { id: 'Ko86Gfn7yWQ5P1', nombre: 'Pantalón', precio: 1500 },
];

// const idProductos = productos.map(function(producto) {
//         return producto.id;
// });
// --------------------------------------------------------------------------------------------------
// const idProductos = productos.map((producto) => { return producto.id; });
// --------------------------------------------------------------------------------------------------
// const idProductos = productos.map(producto => { return producto.id });
// --------------------------------------------------------------------------------------------------
// const idProductos = productos.map(producto => producto.id);
// --------------------------------------------------------------------------------------------------
const idProductos = productos.map(({ id }) => id);

console.log(idProductos);