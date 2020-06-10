import React, { Component } from "react";
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { configure } from "@testing-library/react";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        ingredients['bacon'] = parseInt(query.get('bacon'));
        ingredients['cheese'] = parseInt(query.get('cheese'));
        ingredients['meat'] = parseInt(query.get('meat'));
        ingredients['salad'] = parseInt(query.get('salad'));
        this.setState({ingredients: ingredients});
    }

    checkoutCancelledHanlder = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelledHanlder} checkoutContinued={this.checkoutContinuedHandler}></CheckoutSummary>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}></Route>
            </div>
        )
    }
};
export default Checkout;