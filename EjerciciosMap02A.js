const empleados = [
        { nombre: 'María Ruiz', edad: 47, sexo: 'femenino' }, 
        { nombre: 'José Valverde', edad: 68, sexo: 'masculino' }, 
        { nombre: 'Carlos Rivero', edad: 36, sexo: 'masculino' }, 
        { nombre: 'Ada Rodríguez', edad: 33, sexo: 'femenino' }, 
        { nombre: 'Luisa Pérez', edad: 68, sexo: 'masculino' }, 
        { nombre: 'Rafael Jeréz', edad: 25, sexo: 'masculino' }, 
        { nombre: 'William Azócar', edad: 42, sexo: 'masculino' },
];

const empleadosNombres = empleados.map(({ nombre }) => nombre);
empleadosNombres.sort();

console.log(empleadosNombres);