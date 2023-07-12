import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => {
    
    test('debe de cambiar el valor de la caja de texto', () => {
        
        //llamamos al sujeto de pruebas
        render( <AddCategory onNewCategory={ () => {} } /> );

        //extraemos el elemento de la caja de texto
        const input = screen.getByRole('textbox');

        //disparamos el evento cargar input
        fireEvent.input( input, { target: { value: 'Saitama' } });

        //verificamos que coinciden los cambios
        expect( input.value ).toBe('Saitama');

    });



    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue    = 'Saitama';
        const onNewCategory = jest.fn(); //mock de jest para simular funciones

        //llamamos al sujeto de pruebas
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        //extraemos el elemento de la caja de texto y el formulario
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        //disparamos el evento cargar input y submit formulario
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        //screen.debug();

        //verificamos que despues de cargar el form la caja de texto quede vacio
        expect( input.value ).toBe('');

        //verificamos que la funcion onNewCategory haya sido llamado solo una vez
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);

        //verificamos que la funcion onNewCategory haya sido llamado con el input correspondiente
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });



    test('no debe de llamar el onNewCategory si el input está vacío', () => {
        
        const onNewCategory = jest.fn();

        //llamamos al sujeto de pruebas
        render( <AddCategory onNewCategory={ onNewCategory } /> );


        //extraemos el elemento de formulario y disparamos el evento submit
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        //verificamos que no se haya llamado a la funcion onNewCategory porque no se cargo nada en la caja de texto
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });


});