import { useRef } from 'react';

export const FocusScreen = () => {

    /*
        useRef
        - Es un hook que permite la manipulación directa de elementos del DOM.
        - No usa el virtual DOM de react.
        - Para enlazar useRef a un elemento HTML, dicho elemento debe tener la propiedad ref 
          con el valor de la variable de referencia.
        - useRef siempre regresa un objeto mutable con una única propiedad current.
    */

    const inputRef = useRef();

    const onClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>

    </>
  )
}