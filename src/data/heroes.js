//si quiero importar este arreglo debo 
//agregar la palabra reservada "export"

//opción 1
//export const heroes = [ ... ]
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


//opción 2
export default heroes;
//exportaciones individuales
//export const owner = ['DC', 'Marvel'];


//exportaciones por defecto e individuales
/*export {
    heroes as default,
    owner
}*/
//para estos casos el import sería:
//import heroes, {owner} from './data/heroes
