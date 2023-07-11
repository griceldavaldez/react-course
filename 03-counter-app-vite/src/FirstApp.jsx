//import { Fragment } from "react";

/*export function FirstApp(){
    return (
        <Fragment>
            <h1>Gricelda</h1>
            <p>Soy un subtitulo</p>
        </Fragment>
    );
}*/


//Un fragmento es un agrupador de otros elementos html
/*export function FirstApp(){
    return (
        <>
            <h1>Gricelda</h1>
            <p>Soy un subtitulo</p>
        </>
    );
}*/

// <></>  otra forma de nombrar fragmentos

/*const name = 'Gricelda';
const boolean = true;
const arreglo = [1,2,3,4,5,6,7,8];
const objeto = {
    nombre: 'App',
    value: 5
}

const multiplicacion = (a,b)=>{
    return a*b;
}


export function FirstApp(props){
    console.log(props);
    return (
        <>
            <h1>{props.title}</h1>
            <h1>{name}</h1>
            <h1>{boolean}</h1>
            <h1>{arreglo}</h1>
            <code>{JSON.stringify(objeto) //si quiero imprimir objeto, puedo hacerlo con esta funcion}</code>
            <p>{1+2}</p>
            <p>{multiplicacion(10,2)}</p>
        </>
    );
}*/

//{} sirve para agregar codigo JS en html
//sirve solo para expresiones o valores, no para objetos
//si quiero usar objetos se usa JSON.stringify(objeto)


/*PropTypes*/

//para definir el tipo de dato de los props
import PropTypes from 'prop-types';

export function FirstApp({title, subtitle=123, name}){
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h1>{subtitle}</h1> 
            <h1>{name}</h1>        
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}


FirstApp.defaultProps = {
    //title: 'No hay titulo',
    subtitle: "No hay subtitulo",
    name: 'Gricelda'
}