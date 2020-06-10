import React, { Component } from "react";
import Aux from './../../hoc/Auxillary';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import axios from './../../axios-order';
import instance from "./../../axios-order";
import Spinner from "./../../components/UI/Spinner/Spinner";

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('/ingredients.json').then((response) => {
            this.setState({
                ingredients: response.data
            });
        })
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce((sum, elm) => {
            return sum + elm;
        }, 0);
        this.setState({
            purchasable: sum > 0
        })
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
        this.updatePurchaseState(updatedIngredients);
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
            this.updatePurchaseState(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        // alert('You continue')
        // this.setState({
        //     loading: true
        // });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Sriram",
        //         address: {
        //             street: "Test street 1",
        //             zipCode: '522314',
        //             country: "India"
        //         },
        //         email: "test@test.com"
        //     },
        //     deliveryMethod: "fastest"
        // }
        // axios.post('/orders.json', order).then((response) => {
        //     console.log(response);
        //     this.setState({
        //         loading: false,
        //         purchasing: false
        //     });
        // }).catch((error) => {
        //     console.log(error);
        //     this.setState({
        //         loading: false,
        //         purchasing: false
        //     });
        // });
        const queryParams = [];
        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        let orderSummary = null;
        let burger = <Spinner></Spinner>;
        if(this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} price={this.state.totalPrice} purchasable={this.state.purchasable} ordered={this.purchaseHandler}></BuildControls>
                </Aux>
            );
            orderSummary = <OrderSummary ingredients={this.state.ingredients} purchaseCanceled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinueHandler} price={this.state.totalPrice}></OrderSummary>;
        }
        if(this.state.loading) {
            orderSummary = <Spinner></Spinner>;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
};
export default BurgerBuilder;