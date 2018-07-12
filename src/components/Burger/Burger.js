import React from 'react';

import Classes from './Burger.css';
import BurgerIngredent from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredent key={igkey+i} type={igkey} />
        });
    }).reduce((arr, el)=>{  
        return arr.concat(el);
    }, []); 
    
    if(transformIngredients.length === 0){
        transformIngredients = <p><strong>Please Start adding ingredients</strong></p>;
    }
    
    return (
        <div className={Classes.Burger}>
            <BurgerIngredent type="bread-top" />
            {transformIngredients}
            <BurgerIngredent type="bread-bottom" />
        </div>
    );
};

export default burger;