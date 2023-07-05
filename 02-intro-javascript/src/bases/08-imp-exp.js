import heroes from '../data/heroes';

//console.log(heroes);


/*const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if(heroe.id === id){
            return true;
        }else{
            return false;
        }
    }
}*/

//Importante!!
// find devuelve solo el primer elemento que cumple con la condición

const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id );
}

//const getHeroeById = (id) =>  heroes.find((heroe) => heroe.id === id );

//console.log(getHeroeById(2));


//Importante!!
// filter devuelve todos los elementos que cumplen con la condición

const getHeroesByOwner = (owner) => {
    return  heroes.filter((heroe) => heroe.owner === owner);
}

//console.log(getHeroesByOwner('DC'));
//console.log(getHeroesByOwner('Marvel'));


export {
    getHeroeById,
    getHeroesByOwner
}