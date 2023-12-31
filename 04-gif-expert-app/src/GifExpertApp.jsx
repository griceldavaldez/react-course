import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    //Los hooks states se manejan de manera posicional
    //No se deben declarar hooks states de manera condicional
    const [categories, setCategories] = useState([]);

    //console.log('setCategories', setCategories);
    const onAddCategory = (newCategory) =>{
        //if(categories.includes(newCategory)) return;
        if((categories.map((category) => category.toLowerCase())).includes(newCategory.toLowerCase())) return;
        //setCategories([newCategory,...categories]);
        setCategories([newCategory]);
    }


    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={(event) => onAddCategory(event)}
        />

        {
            categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />       
            ))
        }

    </>
  )
}
