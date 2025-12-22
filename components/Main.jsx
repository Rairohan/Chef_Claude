import '../src/index.css'
import React from 'react'
export default function Main(){
    const[ingredients, setIngredients]= React.useState ([])
 const ingredientElements = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))
   
    function handleSubmit(event){
        event.preventDefault()
        const newIngredient = event.target.ingredient.value
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.target.ingredient.value = ''
        
    }
    return(
    <main>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder=' e.g oregano'
            aria-label='Add ingredient'
            name='ingredient'
            /> 
            <button>+ Add ingredients</button>
        </form>
        <ul>
            {ingredientElements}
        </ul>
    </main>
    )
} 