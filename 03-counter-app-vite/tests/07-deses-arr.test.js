import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () =>{
    test('retornaArreglo debe retornar un string y un numero', () =>{
        
        const retornaArr = retornaArreglo();
        const [letters, numbers] = retornaArr;

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //verifica el tipo de dato
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        //que acepte cualquier string
        expect(letters).toEqual(expect.any(String));
    })
})


