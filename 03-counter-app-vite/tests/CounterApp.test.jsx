import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el <CounterApp/>', () =>{
    const initialValue = 10;
    test('Debe de hacer match con el snapshot', () =>{
        const {container} = render( <CounterApp value={initialValue} /> );
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el valor inicial de 100 <CounterApp value={100}', () =>{
        render( <CounterApp value={100} /> );
        expect(screen.getByText(100)).toBeTruthy();
        //expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
    })

    test('Debe de incrementar con el boton +1', () =>{
        render( <CounterApp value={initialValue} /> );
        //fireEvent.click(screen.getByText('+1'));  //simular click
        fireEvent.click(screen.getByRole('button', {name:'btn-add'}));
        expect(screen.getByText('11')).toBeTruthy();
    })

    test('Debe de decrementar con el boton -1', () =>{
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    })

    test('Debe de funcionar el boton de Reset', () =>{
        render( <CounterApp value={initialValue} /> );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        //expect(screen.getByText(initialValue)).toBeTruthy();

        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));
    })
})