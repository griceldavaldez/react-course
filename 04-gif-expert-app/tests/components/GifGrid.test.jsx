import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


jest.mock('../../src/hooks/useFetchGifs'); //mock de jest para simular la funcion useFetchGifs


describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

      //simulamos el retorno de useFetchGifs al inicio cuando no hay imagenes
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        //llamamos al sujeto de pruebas
        render( <GifGrid category={ category } /> );

        //verificamos que existan estos textos
        expect( screen.getByText( 'Cargando...' ) ).toBeTruthy();
        expect( screen.getByText( category ) ).toBeTruthy();

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifs = [
          {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
          },
          {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
          },
        ]


        //simulamos el retorno de useFetchGifs cuando ya se cargaron imagenes
        useFetchGifs.mockReturnValue({
          images: gifs,
          isLoading: false
        });

        //llamamos al sujeto de pruebas
        render( <GifGrid category={ category } /> );

        //verificamos que haya 2 img, puesto que mandamos un arreglo de 2 elementos
        expect( screen.getAllByRole('img').length ).toBe(2);
        
    });


});