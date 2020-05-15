import React, { Component } from "react";
import Aux from './../../hoc/Auxillary';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const count = this.state.ingredients[type]
        const updatedCount = count + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        const count = this.state.ingredients[type];
        if(count > 0) {
            const updatedCount = count - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENTS_PRICES[type];
            const newPrice = this.state.totalPrice - priceAddition;
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
        }
    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} price={this.state.totalPrice}></BuildControls>
            </Aux>
        )
    }
};
export default BurgerBuilder;