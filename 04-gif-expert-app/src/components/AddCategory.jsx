import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if(newInputValue<=1) return;
        //setCategories((categories) => [inputValue], ...categories);
        onNewCategory(newInputValue); //se emite el nuevo valor
        setInputValue('');
    }

  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label="form"> 
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form>
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}