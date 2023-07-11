import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp/>', () =>{
    test('Debe de hacer match con el snapshot', () =>{
        const title = 'Hola soy Goku';
        const {container} = render(<FirstApp title={title}/>)

        expect(container).toMatchSnapshot();  //toma un snapshot del componente
    });

    test('Debe mostrar el titulo en un h1', () =>{
        const title = 'Hola soy Goku';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)

        //expect(getByText(title)).toBeTruthy();
        //const h1 = container.querySelector('h1');
        //console.log(h1.innerHTML);
        //expect(h1.innerHTML).toBe(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    
    })

    test('Debe mostrar el subtitulo enviado por props', () =>{
        const title = 'Hola soy Goku';
        const subtitle = 'Soy un subtitle';
        const {getAllByText} = render(<FirstApp title={title} subtitle={subtitle}/>)

        expect(getAllByText(subtitle).length).toBe(1);
    
    })
})