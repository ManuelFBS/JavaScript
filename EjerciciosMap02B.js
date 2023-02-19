const empleados = [
        { nombre: 'María Ruiz', edad: 47, departamento: 'Operaciones', salario: 12000 }, 
        { nombre: 'José Valverde', edad: 68, departamento: 'Administración', salario: 9000 }, 
        { nombre: 'Carlos Rivero', edad: 36, departamento: 'Operaciones', salario: 10500 }, 
        { nombre: 'Ada Rodríguez', edad: 33, departamento: 'Informática', salario: 8000 }, 
        { nombre: 'Luisa Pérez', edad: 68, departamento: 'Operaciones', salario: 9800 }, 
        { nombre: 'Rafael Jeréz', edad: 25, departamento: 'Mantenimiento', salario: 9400 }, 
        { nombre: 'William Azócar', edad: 42, departamento: 'Informática', salario: 10700 },
];

const seleccion = empleados.map(empleado => ({
        nombre: empleado.nombre, 
        salario: empleado.salario
}));

console.log(seleccion);