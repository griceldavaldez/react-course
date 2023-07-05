//Desestructuración
//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log(persona.nombre); //lo que quiero es acceder a los valores
console.log(persona.edad);   //de una forma mas sencilla
console.log(persona.clave);


/*
 * La sintaxis de desestructuración es una expresión de JavaScript 
 * que permite desempacar valores de arreglos o propiedades de 
 * objetos en distintas variables.
 */

//extraigo sus elementos
const {nombre, edad, clave} = persona; //no es necesario que este en orden
console.log(nombre);
console.log(edad);
console.log(clave);

//puedo usar la desestructuración en los argumentos
const retornaPersona = ({nombre, edad, rango = 'Capitan'})  => { //podemos definir valores por defecto
    //const {nombre, edad, clave} = usuario; 
    console.log(nombre, edad, rango);
}

retornaPersona(persona);


const miFuncionPersonalizada = ({clave, edad}) => {
    return {
        nombreClave: clave,
        anhos: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
};


const {nombreClave, anhos, latlng} = miFuncionPersonalizada(persona);
const {lat, lng} = latlng;
//const {nombreClave, anhos, latlng: {lat, lng}} = miFuncionPersonalizada(persona);
console.log(nombreClave, anhos, latlng);
console.log(lat, lng);
