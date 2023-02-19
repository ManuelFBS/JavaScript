const dataCompleta = [
        { 
                area: 1000, 
                cultivo: 'Tomates', 
                administrador: 'Carolina', 
                adminId: 1, 
                año: 2016, 
        }, 
        { 
                area: 200, 
                cultivo: 'Tomates', 
                administrador: 'Esteban', 
                adminId: 2, 
                año: 2017, 
        }, 
        { area: 350, cultivo: 'Lechuga', administrador: 'AnaB', adminId: 5, año: 2016, }, 
        { area: 500, cultivo: 'Pimentón', administrador: 'Diana', adminId: 2, año: 2018, }, 
        { area: 1000, cultivo: 'Cebollas', administrador: 'Miriam', adminId: 4, año: 2020, }, 
        { area: 400, cultivo: 'Ajo', administrador: 'Ronald Suárez', adminId: 4, año: 2021, }, 
        { area: 400, cultivo: 'Melones', administrador: 'Benjamín Rojas', adminId: 3, año: 2021, }, 
];

let resultadoFinal = [];

dataCompleta.map(el => {
        const key = el.cultivo + "-" + el.año;
        const val = { [ el.adminId ]: el.administrador };
        const res = { [key]: val };
        resultadoFinal.push(res);
});

console.log(resultadoFinal);