import React from 'react';

import Classes from './Burger.css';
import BurgerIngredent from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients).map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredent key={igkey+i} type={igkey} />
        });
    }); 
    return (
        <div className={Classes.Burger}>
            <BurgerIngredent type="bread-top" />
            {transformIngredients}
            <BurgerIngredent type="bread-bottom" />
        </div>
    );
};

export default burger;