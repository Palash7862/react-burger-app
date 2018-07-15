import React, { Component } from 'react';
import Oux from '../../../hoc/Oux/Oux';
import Button from '../../UI/Button/Button';
class OrderSummery extends Component {

    componentWillUpdate(){
        console.log('[OrderSummery] WillUpdate');
    }

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey=>{
                return (<li key={igKey}><span>{igKey}</span>:{this.props.ingredients[igKey]}</li>);
            });

        return(
            <Oux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.modalClosed}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.modalClosed}>Continue</Button>
            </Oux>
        );
    }  
};

export default OrderSummery;