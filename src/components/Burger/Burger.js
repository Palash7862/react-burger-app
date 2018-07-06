import React from 'react';

import Classes from './Burger.css';
import BurgerIngredent from './BurgerIngredient/BurgerIngredient';
const burger = () => {
    return (
        <div className={Classes.Burger}>
            <BurgerIngredent type="bread-top" />
            <BurgerIngredent type="cheese" />
            <BurgerIngredent type="meat" />
            <BurgerIngredent type="bread-bottom" />
        </div>
    );
};

export default burger;