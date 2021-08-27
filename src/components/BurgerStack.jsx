function BurgerStack(props) {
    function renderAddedIngredients() {
        return props.addedIngredients.map((ingredient, idx) => {
            return (
                <li
                    key={idx}
                    style={{ backgroundColor: ingredient.color }}
                >
                    {ingredient.name}
                </li>
            )
        })
    }
    return (
        <div>
            <h3>Stacking Area</h3>
            <ul>
                { renderAddedIngredients() }
            </ul>
        </div>
    )
}

export default BurgerStack