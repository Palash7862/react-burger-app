import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
import Oux from '../../hoc/Oux/Oux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import axios from '../../hoc/AxiosOrder/AxiosOrder';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandal from '../../hoc/WithErrorHandal/WithErrorHandal';


class BurgerBuilder extends Component {
    
    state = {  
        purchaesing: false,
        loading: false
    } 

    updatePurchasesAble(){ 
        const ingredient = {
            ...this.props.ings
        }; 
        const sum = Object.keys(ingredient).map(iKey=>{
            return ingredient[iKey];
        }).reduce((sum, el)=>{
            return sum + el;
        }, 0); 
        return sum > 0;  
    }  

    purchaesHandaler = () => {
        this.setState({purchaesing: true});
    }
    purchaesClosedHandaler = () => {
        this.setState({purchaesing: false});
    }

    purchaesContinueOrderHandaler = () => { 
        this.props.history.push('/check-out'); 
    }

    render () {  
        //console.log(this.props);
        const disableInfo = {
            ...this.props.ings
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0; 
        }
 
        let orderSummery = null;
        let burger = <Spinner/>;
        if(this.props.ings){
            burger = (
                <Oux>
                    <Burger ingredients={this.props.ings} /> 
                    <BuildControls 
                        ingprices={this.props.ingprices}
                        ingredientAdd={this.props.onAddIngredient} 
                        ingredientRemove={this.props.onRemoveIngredient} 
                        disabled={disableInfo} 
                        price={this.props.price} 
                        ordered={this.purchaesHandaler}
                        purchasesAble={this.updatePurchasesAble(this.props.ings)}/>
                </Oux>
            );
            orderSummery = <OrderSummery 
                ingredients={this.props.ings} 
                modalClosed={this.purchaesClosedHandaler}
                continueOrder={this.purchaesContinueOrderHandaler}
                price={this.props.price}/>;
                
        }
        if(this.state.loading){
            orderSummery = <Spinner/>;
        } 
        
        return ( 
            <Oux>
                <Modal show={this.state.purchaesing} modalClosed={this.purchaesClosedHandaler}>
                    {orderSummery}
                </Modal>
                {burger}
            </Oux>
        );
    }
}
const mapStateToProps = state =>{
    return {
        ings: state.ingredients,
        price: state.totalPrice, 
        ingprices: state.initprices
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingName)=>dispatch({
            type:actionType.ADD_INGREDIENT, 
            ingName:ingName
        }), 
        onRemoveIngredient: (ingName)=>dispatch({
            type:actionType.REMOVE_INGREDIENT, 
            ingName:ingName
        }), 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandal(BurgerBuilder, axios));