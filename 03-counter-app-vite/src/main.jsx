import React from 'react'
import ReactDOM from 'react-dom/client'

//si exporto individualmente(es con desestructuracion y utilizando nombre original)
//import {App, print} from './HelloWorldApp';
import { FirstApp } from './FirstApp';

//si exporto como default(puedo ponerle el nombre que quiera)
//import NameApp from ./HelloWorld 

import './styles.css';
import { CounterApp } from './CounterApp';

//se recomienda usar el nodo estricto
/*ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>  
        <FirstApp/>
    </React.StrictMode>
);*/

/*Estructura basica:
1. import de React y otras herramientas de renderizacion
2. functional component
3. renderizar el componente en el DOM, view, etc
*/


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>  
        {/*<CounterApp value={0}/>*/}
        <FirstApp title="Hola soy Vegeta"/>
    </React.StrictMode>
);