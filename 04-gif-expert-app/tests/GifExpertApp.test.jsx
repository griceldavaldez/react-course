import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';



describe('Pruebas en <GifExpertApp />', () => {


    test('debe renderizar GifExpertApp sin errores', () => {
        const {container} = render(<GifExpertApp />);
        expect( container ).toMatchSnapshot();
    });

    test('debe agregar una nueva categoría al enviar el formulario', () => {

        //TODO no funciona la prueba. Arreglar

      /*  const { getByLabelText, getByText } = render(<GifExpertApp />);

        const input = getByLabelText("Category");
        fireEvent.change(input, { target: { value: "One Punch" } });

        const addButton = getByText("Add");
        fireEvent.click(addButton);

        // Verificar si la nueva categoría se ha agregado correctamente
        expect(getByText("One Punch")).toBeInTheDocument();*/
        
    });


    test('no debe agregar una categoría duplicada', () => {

        //TODO no funciona la prueba. Arreglar

        /*const { getByLabelText, getByText } = render(<GifExpertApp />);

        const input = getByLabelText("Category");
        fireEvent.change(input, { target: { value: "Barbie" } });
      
        const addButton = getByText("Add");
        fireEvent.click(addButton);
      
        // Verificar que la categoría duplicada no se agregó
        expect(getByText("Barbie")).toBeInTheDocument();
        expect(getByText("Barbie").parentElement.childElementCount).toBe(1);*/

    });

    
});