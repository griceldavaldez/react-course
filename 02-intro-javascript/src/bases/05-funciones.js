//Funciones en JS
function saludar(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar('Goku'));


//otras formas de hacer
const  saludar2 = function(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar2('Vegeta'));


//funciones de flecha
const  saludar3 = (nombre) => {  //las funciones de flecha son mas legibles
    return `Hola, ${nombre}`;
}
console.log(saludar3('Vegeta'));


const  saludar4 = () => `Hola Mundo`;
console.log(saludar4());


//puedo retornar un objeto con return
const getUser =  () => {
    return {
        uid: 'ABC1234',
        username: 'gbbval'
    }
}
console.log(getUser);

//esto es error, javascript no puede saber que quiero
//retornar un objeto con esta sintaxis
/*const getUser2 =  () => {
    uid: 'ABC1234',
    username: 'gbbval'
}
console.log(getUser2);*/


//lo que si puedo hacer es lo siguiente
//es decir, envuelvo en un parentesis el objeto que quiero recibir
const getUser3 =  () => ({
    uid: 'ABC1234',
    username: 'gbbval'
});
console.log(getUser3);


//Tarea
/*
1. transformar a una función de flecha
2. tiene que retornar un objeto implicito
3. pruebas
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC1234',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
*/

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC1234',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);