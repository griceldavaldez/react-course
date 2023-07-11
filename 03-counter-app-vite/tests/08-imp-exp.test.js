import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";

describe('Pruebas en 08-imp-exp', () =>{
    test('getHeroe debe retornar un heroe por ID', () =>{
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    })

    test('getHeroe debe retornar undefined si no existe', () =>{
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () =>{
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        /*expect(hero)
        .toEqual([
            {id: 1, name: 'Batman', owner: owner}, 
            {id: 3, name: 'Superman', owner: owner}, 
            {id: 4, name: 'Flash', owner: owner}
        ])*/

        //forma recomendada
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () =>{
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(2);
    })

})