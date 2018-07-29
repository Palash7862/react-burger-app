import React, { Component } from 'react';
import { connect } from 'react-redux';
import Oux from '../../hoc/Oux/Oux';
import axios from 'axios';
import WithErrorHandal from '../../hoc/WithErrorHandal/WithErrorHandal';
import * as actions from '../../store/actions/index'; 
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSingle from './OrderSingle/OrderSingle'; 
import classes from './OrderDetails.css';

class OrderDetails extends Component {

    state = {
        orders: null
    }

    componentWillMount(){
        this.props.onOrderFetch();
        // axios.get('https://react-bugger-app.firebaseio.com/order.json')
        //     .then(response=>{ 
        //         const newOrders = Object.keys(response.data).map(igKey=>{
        //             const singleOrder = {
        //                 id: igKey,
        //                 ...response.data[igKey]
        //             }
        //             return singleOrder; 
        //         });
        //         this.setState({orders: newOrders});
        //     }); 
    } 

    render(){  
        let orderContent = (
            <Oux>
                <Modal show={true}>
                    <Spinner/>
                </Modal> 
            </Oux>
        );
        if(!this.props.loading){
            orderContent = (
                <div className={classes.OrderDetails}> 
                    <ul>
                        {(this.props.orders) ?
                            this.props.orders.map(order=>(
                                <OrderSingle key={order.id} 
                                ingredients={order.ingredient} 
                                price={order.price}/>
                            ))
                        : null}
                    </ul>
                </div>
            );
        }

        return orderContent;
    }
}
const mapStateToProps = state =>{
    return {
        orders: state.opr.order, 
        loading: state.opr.loading, 
    }
}
const mapDispatchToProps = dispatch => { 
    return { 
        onOrderFetch: ()=>dispatch(actions.orderFetch()), 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandal(OrderDetails, axios));