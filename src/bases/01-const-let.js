
//Variables y constantes
const nombre = 'Gricelda';
const apellido = 'Valdez';
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//var no se debe usar...
if(true){
    const nombre = 'Carlos';    //se puede reutilizar una variable 
    let valorDado = 6;         //o constante si es dentro de otro scope
    console.log(nombre, valorDado);
}
console.log(nombre, valorDado);