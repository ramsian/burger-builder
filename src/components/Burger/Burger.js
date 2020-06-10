import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    console.log(props.ingredients);
    let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, index) => {
            return (<BurgerIngredient key={igKey+index} type={igKey}></BurgerIngredient>)
        })
    }).reduce((arr, elm) => {
        return arr.concat(elm);
    }, []);
    
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please fill in some of the ingredients.</p>
    }
    console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
};
export default burger;