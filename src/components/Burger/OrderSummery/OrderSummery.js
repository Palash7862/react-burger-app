import React from 'react';
import Oux from '../../../hoc/Oux';
import Button from '../../UI/Button/Button';
const orderSummery = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey=>{
                return (<li key={igKey}><span>{igKey}</span>:{props.ingredients[igKey]}</li>);
            });
    return (
        <Oux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.modalClosed}>Cancel</Button>
            <Button btnType='Success' clicked={props.modalClosed}>Continue</Button>
        </Oux>
    )

};

export default orderSummery;