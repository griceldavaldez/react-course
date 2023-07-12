import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {

      //llamamos al sujeto de pruebas
      const { result } = renderHook( () => useFetchGifs('One Punch') );
      const { images, isLoading } = result.current;
      
      //realizamos las verificaciones correspondientes
      expect( images.length ).toBe(0); //el arreglo debe ser vacio
      expect( isLoading ).toBeTruthy(); //isLoading es true

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {

      //llamamos al sujeto de pruebas
      const { result } = renderHook( () => useFetchGifs('One Punch') );


      //esperamos a que termine de cargar las imagenes
      await waitFor(
        ()=> expect( result.current.images.length ).toBeGreaterThan(0), //el retorno del arreglo debe ser > 0
        {timeout: 3000}
      )
              
      const { images, isLoading } = result.current;
      
      //realizamos las verificaciones correspondientes
      expect( images.length ).toBeGreaterThan(0); //el arreglo debe tener elementos
      expect( isLoading ).toBeFalsy(); //isLoading es false

    });

});