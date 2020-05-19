import React from 'react';
import BurgerControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' },
]

const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>{props.price}</p>
            {controls.map((control) => {
                return (<BurgerControl key={control.label} added={() => props.ingredientAdded(control.type)} removed={() => props.ingredientRemoved(control.type)} label={control.label}></BurgerControl>)
            })}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
};
export default buildControls;