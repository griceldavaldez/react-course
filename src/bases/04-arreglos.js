//Arreglos en JS

//puedo crear un array con 100 elementos
const arreglo = new Array(100);
//y si nececeito mas espacio para insertar,
// puedo agregar con push, no es algo estatico
arreglo.push(1); //push insertar al final del array
console.log(arreglo);


//puedo crear de otra forma
const arreglo2 = [];
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);
arreglo2.push(5);
console.log(arreglo2);


//puedo crear de otra forma
const arreglo3 = [1,2,3,4,5];
console.log(arreglo3);

//ejercicio
let arreglo4 = [...arreglo3, 6];
console.log(arreglo4);


//esta es otra manera de crear un arreglo a partir de otro
//sin copia de referencia
const arreglo5 =  arreglo4.map(function(numero){
    return numero*2;
});

console.log(arreglo5);