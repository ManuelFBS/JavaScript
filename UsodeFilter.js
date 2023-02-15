const productos = [ 
        { id: 'HFgsfYd43gR7pX0t', nombre: 'Camiseta', precio: 500 }, 
        { id: 'Bbw6547mD8hs34', nombre: 'Zapatos', precio: 2000 }, 
        { id: 'Ko86Gfn7yWQ5P1', nombre: 'Pantalón', precio: 1500 },
];

// const productosBaratos = productos.filter(producto => producto.precio < 1000);
// -----------------------------------------------------------------------------------------------------------
// const esBarato = producto => producto.precio < 1000;
// const productosBaratos = productos.filter(esBarato);
// -----------------------------------------------------------------------------------------------------------
const esBarato = producto => producto.precio < 1000;
const esCaro = producto => !esBarato(producto);
//
const productosBaratos = productos.filter(esBarato);
const productosCaros = productos.filter(esCaro);

console.log(productosBaratos);
console.log(productosCaros);