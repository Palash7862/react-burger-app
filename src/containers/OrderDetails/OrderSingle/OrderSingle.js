import React from 'react';

const OrderSingle = (props) => { 
    let ing = '';
    for(let key in props.ingredients){
        ing += key+' ('+props.ingredients[key]+'), ';
    }
    return(
        <li>
            <span style={{display:'block'}}>{ing}</span>
            <strong style={{display:'block'}}>Price{props.price.toFixed(2)}</strong>
        </li> 
    );
}

export default OrderSingle;