import React from "react"
import ClaudeRecipies from "./ClaudeRecipies"
import IngredientList from "./IngredientList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const [recipeShown, setRecipeShown] = React.useState(false) 

    function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }   


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />} 
            {recipeShown && <ClaudeRecipies ingredients={ingredients} />}    
        </main> 
    )
}