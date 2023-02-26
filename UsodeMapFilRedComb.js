const productos = [ 
        { id: 'CA00015', nombre: 'Camiseta', precio: 500 }, 
        { id: 'ZP24003', nombre: 'Zapatos', precio: 2000 }, 
        { id: 'PT04091', nombre: 'Pantalón', precio: 1500 }, 
        { id: 'CA00023', nombre: 'Camisa', precio: 2500 }, 
        { id: 'BO41205', nombre: 'Botas', precio: 1800 }, 
        { id: 'BX80004', nombre: 'Boxers', precio: 120 }, 
        { id: 'CI00215', nombre: 'Cinturones', precio: 140 }, 
        { id: 'CL00204', nombre: 'Calcetines', precio: 70 },
];

const esBarato = producto => producto.precio < 1000;
const obtenerPrecio = productos.map(({ precio }) => precio);

const totalPreciosBaratos = (acumulador, precio) => {
        return acumulador += precio;
}

const precioTotalProductosBaratos = productos.filter(esBarato).map(({ precio }) => precio).reduce(totalPreciosBaratos);

console.log(precioTotalProductosBaratos);