import { useState } from 'react';
import PropTypes from 'prop-types';


//Cuando hay un cambio en el estado se va a volver a disparar el functional component
export function CounterApp({value}){
    
    const [counter, setCounter] = useState(value);

    const handleAddition = () =>{
        setCounter(counter + 1);
        //setCounter((c) => c+1)
    }

    const handleSubtract = () =>{
        setCounter(counter - 1);
    }

    const handleReset = () =>{
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>  
            <button onClick={handleAddition}> +1 </button> 
            <button onClick={handleSubtract}> -1 </button> 
            <button onClick={handleReset}> Reset </button> 
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


CounterApp.defaultProps = {
    value: 123
}