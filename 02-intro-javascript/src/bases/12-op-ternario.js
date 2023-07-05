
const activo = true;

let mensaje = '';

//Forma tradicional de la condicional
if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}

console.log(mensaje);


//usando el operador ternario
let msg = (!activo) ? 'Activo' : 'Inactivo';
console.log(msg);

//cuando quiero solo la parte del if then
//puedo hacer de estas formas
//let msg = (!activo) ? 'Activo' : null;
const mensaje2 = activo && 'Activo'; 
console.log(mensaje2);

