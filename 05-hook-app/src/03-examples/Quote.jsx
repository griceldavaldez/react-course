import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ title, description }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  /*
    useLayoutEffect se ejecuta de forma síncrona, justo después de que React ejecutó 
    todas las mutaciones pero antes de “pintar” en pantalla.

    Esto es útil para por ejemplo obtener las medidas del DOM y después ejecutar alguna
     mutación en base a esos datos.

    El orden de ejecución para useLayoutEffect es:
    1. El componente se actualiza por algún cambio de estado, props o el padre se re-renderiza
    2. React renderiza el componente
    3. Tu efecto es ejecutado!!
    4. La pantalla se actualiza “visualmente”
  */

  useLayoutEffect(() => {
    
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [])
  


  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}>
        <div>
          <p ref={ pRef } className="mb-1">{ description }</p>
          <footer className="blockquote-footer"> { title } </footer>
        </div>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}