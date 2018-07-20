import React, { Component } from 'react';
import axios from 'axios';
import OrderSingle from './OrderSingle/OrderSingle'; 
import classes from './OrderDetails.css';

class OrderDetails extends Component {

    state = {
        orders: null
    }

    componentWillMount(){
        axios.get('https://react-bugger-app.firebaseio.com/order.json')
            .then(response=>{ 
                const newOrders = Object.keys(response.data).map(igKey=>{
                    const singleOrder = {
                        id: igKey,
                        ...response.data[igKey]
                    }
                    return singleOrder; 
                });
                this.setState({orders: newOrders});
            }); 
    } 

    render(){  
        return (
            <div className={classes.OrderDetails}> 
                <ul>
                    {(this.state.orders) ?
                        this.state.orders.map(order=>(
                            <OrderSingle key={order.id} 
                            ingredients={order.ingredient} 
                            price={order.price}/>
                        ))
                    : null}
                </ul>
            </div>
        );
    }
}

export default OrderDetails;