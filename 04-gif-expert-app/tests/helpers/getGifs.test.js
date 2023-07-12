import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
    
    test('debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');

        //con esto nos aseguramos que el arreglo tenga al menos un elemento
        expect( gifs.length ).toBeGreaterThan( 0 ); //length ser mayor que 0

        //con esto nos aseguramos que cada elementos del arreglo tengas las sgtes propiedades
        expect( gifs[0] ).toEqual({  //basta con evaluar el elemento del array en la posicion cero
            id: expect.any( String ),
            title: expect.any( String ), //que sea cualquier string
            url: expect.any( String ),
        });
        
    });
});