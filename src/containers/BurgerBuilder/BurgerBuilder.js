import React, { Component } from 'react';
import Oux from '../../hoc/Oux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRED_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.7,
    meat: 1.5
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandal = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGRED_PRICES[type];
        this.setState({
            ingredients: updateIngredient,
            totalPrice: newPrice
        });
    };

    removeIngredientHandal = (type) => {
        const oldCount = this.state.ingredients[type]; 
        if(oldCount > 0){
            const newCount = oldCount - 1;
            const updateIngredient = {
                ...this.state.ingredients
            }; 
            updateIngredient[type] = newCount;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGRED_PRICES[type];
            this.setState({
                ingredients: updateIngredient,
                totalPrice: newPrice
            });
        }  
    };

    render () {
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0; 
        }
        
        return ( 
            <Oux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdd={this.addIngredientHandal} 
                    ingredientRemove={this.removeIngredientHandal} 
                    disabled={disableInfo} 
                    price={this.state.totalPrice}/>
            </Oux>
        );
    }
}

export default BurgerBuilder;