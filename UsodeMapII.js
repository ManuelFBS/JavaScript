const productos = [ 
        { id: 'HFgsfYd43gR7pX0t', nombre: 'Camiseta', precio: 500 }, 
        { id: 'Bbw6547mD8hs34', nombre: 'Zapatos', precio: 2000 }, 
        { id: 'Ko86Gfn7yWQ5P1', nombre: 'Pantalón', precio: 1500 },
];

const productosConDescuento = productos.map(function(producto) {
        if (producto.precio < 1000) return producto;
        
        return {
                ...producto,
                precio: producto.precio * 0.9
        };
}); 

console.log(productosConDescuento);
console.log(productos);