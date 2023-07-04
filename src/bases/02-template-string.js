//console.log("Hola mundo!!!");

const nombre = 'Gricelda';
const apellido = 'Valdez';
const nombreCompleto = nombre + ' ' + apellido;
const saludo = ` Hola mundo `
const nombreCompleto2 = `${nombre} ${apellido}`;
const nombreCompleto3 = `
${nombre} 
${apellido}
${1+1}
`;

console.log(nombreCompleto)
console.log(nombreCompleto2)
console.log(nombreCompleto3)

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)