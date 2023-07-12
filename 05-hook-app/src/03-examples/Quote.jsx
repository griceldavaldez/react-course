//import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ title, description }) => {

  /*const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [description])*/
  


  return (
      <blockquote className="blockquote text-end">
          <p className="mb-1">{ description }</p>
          <footer className="blockquote-footer"> { title } </footer>
      </blockquote>
  )
}