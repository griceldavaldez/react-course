import { useState } from "react"

export const AddCategory = ({onNewCategories}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if(newInputValue<=1) return;
        //setCategories((categories) => [inputValue], ...categories);
        onNewCategories(newInputValue); //se emite el nuevo valor
        setInputValue('');
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}> 
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
        />
    </form>
  )
}
