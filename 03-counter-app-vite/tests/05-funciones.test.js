import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () =>{
    test('getUser debe retornar un objeto', () =>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();

        //expect(user).toStrictEqual(testUser);
        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe retornar objeto', () => {
        const name = 'Gricelda';
        const testUserAct = {
            uid: 'ABC567',
            username: name
        }

        const usertAct = getUsuarioActivo(name);
        expect(usertAct).toEqual(testUserAct);
    });
})

