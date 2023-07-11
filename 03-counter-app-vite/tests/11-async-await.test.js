import { getImagen } from "../src/base-pruebas/11-async-await"


describe('Pruebas en 11-async-await', () =>{
    test('getImagen debe retornar un URL de la imagen', async() =>{
        const url =  await getImagen();

        //si url es undefined porque no se obtuvo la imagen
        //igual va a pasar la prueba porque estoy comparando con cualquier
        //texto que sea string
        //debemos manejar de otra manera la prueba con error con try catch
        expect(typeof url).toBe('string');
    })
})

