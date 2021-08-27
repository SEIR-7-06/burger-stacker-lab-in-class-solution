// If i'm only presenting some data - use a function component
function IngredientsList(props) {
    function renderIngredients() {
        return props.ingredients.map((ingredient, idx) => {
            return (
                <li 
                    key={idx} 
                    style={{ backgroundColor: ingredient.color }}
                    onClick={() => props.addIngredient(ingredient)}
                >
                    {ingredient.name}
                </li>
            )
        })
    }

    return (
        <div>
            <h2>Available Ingredients</h2>
            <ul>
                { renderIngredients() }
            </ul>
        </div>
    )
}

export default IngredientsList