import React from 'react';
import Auxiliary from './../../../hoc/Auxillary';
import Button from './../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredentsSummary = Object.keys(props.ingredients).map((key) => {
        return (<li key={key}>{key}: {props.ingredients[key]}</li>)
    })
    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredents:</p>
            <ul>
                {ingredentsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button >
            <Button btnType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button >
        </Auxiliary>
    )
};
export default orderSummary;