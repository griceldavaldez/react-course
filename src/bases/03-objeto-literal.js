const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion: {
        ciudad: 'New York',
        zip: 55311321,
        lat: 14.3232,
        lng: 34.92333321
    }
};

//console.log({persona: persona});
//console.table({persona: persona});
console.log(persona);

//no es una copia del valor del objeto, sino una copia
// a la referencia en memoria 
const persona2 = persona;

//entonces si modifico una propiedad
//afecta al original tambien
persona2.nombre = 'Peter'

console.log(persona2);
console.log(persona);

//es un clon al objeto con sus propiedades
const persona3 = {...persona}

//entonces si modifico una propiedad
//no afecta al original
persona3.nombre = 'Giuliana'
console.log(persona3);
console.log(persona);