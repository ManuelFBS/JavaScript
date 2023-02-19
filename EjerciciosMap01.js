const empleados = [
        { nombre: 'María Ruiz', edad: 47, sexo: 'femenino' }, 
        { nombre: 'José Valverde', edad: 68, sexo: 'masculino' }, 
        { nombre: 'Carlos Rivero', edad: 36, sexo: 'masculino' }, 
        { nombre: 'Ada Rodríguez', edad: 33, sexo: 'femenino' }, 
        { nombre: 'Luisa Pérez', edad: 68, sexo: 'masculino' }, 
        { nombre: 'Rafael Jeréz', edad: 25, sexo: 'masculino' }, 
        { nombre: 'William Azócar', edad: 42, sexo: 'masculino' },
];

let listaAscensos = [];
const empleadosAscensos = empleados.map(function (empleado) {
        if (empleado.edad > 30 && empleado.edad < 50) listaAscensos.push(empleado);
});

// listaAscensos.sort(function (a, b) { return a.edad - b.edad; });
listaAscensos.sort((a, b) => a.edad - b.edad);

console.log(listaAscensos);