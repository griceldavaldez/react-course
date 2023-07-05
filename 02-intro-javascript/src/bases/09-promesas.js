//Promesas en JS
import {getHeroeById, getHeroesByOwner} from "./bases/08-imp-exp";

/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        const heroe = getHeroeById(2);
        console.log(heroe);
        //resolve(heroe);
        reject('No se pudo manejar el error');
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe', heroe);
});

promesa.catch(err => console.warn(err));*/


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe === undefined){
                reject(`No se encontró el heroe con id = ${id}`);  
            }else{
                resolve(heroe);
            }
        }, 2000);
    });
    //return promesa;
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);