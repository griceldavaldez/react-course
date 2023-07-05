//Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

//Una forma de imprimir c/ elemento
console.log(personajes[0]);
console.log(personajes[1]);  //Tip!! CTRL + F2 para renombrar variables
console.log(personajes[2]);


//ejemplo de desestructuración
//para obtener solo primer elemento
const [p1] = personajes;
console.log(p1);

//para obtener solo segundo elemento
const [ , p2] = personajes;
console.log(p2);

//para obtener solo tercer elemento
const [ , , p3] = personajes;
console.log(p3);

//para obtener todos los elementos
const [pe1, pe2, pe3] = personajes;
console.log(pe1, pe2, pe3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará a setNombre
const stateArr = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const arr = stateArr('Goku');
console.log(arr);

const [nombre, setNombre] = arr;
console.log(nombre);
setNombre();
