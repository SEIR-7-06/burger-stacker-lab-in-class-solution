import './App.css';

import React from 'react'
import ingredients from './ingredients'
import IngredientsList from './components/IngredientsList';
import BurgerStack from './components/BurgerStack';

// 💡 Concept: "Lifting State"

class App extends React.Component {
  state = {
    addedIngredients: []
  }

  // Anytime you need to use `this`, you have to use
  // an arrow function
  addIngredient = (ingredient) => {
    // This function will be passed to a child component
    // To allow the child to add to App's state
    console.log(ingredient)

    // There is only one acceptable answer
    // for how to change a state variable's contents
    // this.setState - triggers a re-render
    // this.state.addedIngredients = [?????] // not valid!
    let ingredientsCopy = this.state.addedIngredients
    ingredientsCopy.push(ingredient)
    this.setState({
      addedIngredients: ingredientsCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Burger Stacker</h1>
        <IngredientsList 
          ingredients={ingredients}
          addIngredient={this.addIngredient}
        />
        <BurgerStack 
          addedIngredients={this.state.addedIngredients}
        />
      </div>
    );
  }
}

export default App;
