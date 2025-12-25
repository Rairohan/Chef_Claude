import '../src/index.css'
import React from 'react'
export default function Main(){
    const[ingredients, setIngredients]= React.useState ([])
    const ingredientElements = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))
   
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]) 
        
    }
    return(
    <main>
        <form action={addIngredient}>
            <input
            type='text'
            placeholder=' e.g oregano'
            aria-label='Add ingredient'
            name='ingredient'
            /> 
            <button>+ Add Ingredients</button>
        </form>
        <ul>
            {ingredientElements}
        </ul>
    </main>
    )
} 