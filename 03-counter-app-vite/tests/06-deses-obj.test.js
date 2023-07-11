import { usContext } from "../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () =>{
    test('usContext debe retornar un objeto', () =>{
        
        const clave = 'key123';
        const edad = 24;
        
        const testUser = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        
        console.log(testUser); 

        const user = usContext({clave, edad});

        //expect(user).toStrictEqual(testUser);
        expect(user).toEqual(testUser);
    })
})