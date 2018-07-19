import React, { Component } from 'react';
import Oux from '../../hoc/Oux/Oux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import axios from '../../hoc/AxiosOrder/AxiosOrder';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandal from '../../hoc/WithErrorHandal/WithErrorHandal';
const INGRED_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.7,
    meat: 1.5
}

class BurgerBuilder extends Component {
    // {
    //     salad: 0,
    //     bacon: 0,
    //     cheese:0,
    //     meat: 0
    // }
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasesAble: false,
        purchaesing: false,
        loading: false
    } 

    componentDidMount(){
        axios.get('/ingredients.json')
            .then(response=>{
                this.setState({ingredients: response.data});
                console.log(response);
                this.priceUpdate();
            });
    }

    updatePurchasesAble(){ 
        const ingredient = {
            ...this.state.ingredients
        }; 
        const sum = Object.keys(ingredient).map(iKey=>{
            return ingredient[iKey];
        }).reduce((sum, el)=>{
            return sum + el;
        }, 0); 
        this.setState({ purchasesAble: sum > 0});  
    } 

    priceUpdate = () =>{ 
        const updateIngredient = {
            ...this.state.ingredients
        }; 
        const newPrice = Object.keys(updateIngredient).map(igKey=>{
            return  ( INGRED_PRICES[igKey] * updateIngredient[igKey] );
        }).reduce((currntP, el)=>{  
            return currntP + el;
        }, this.state.totalPrice); 
        this.setState({ totalPrice: newPrice });
        console.log(newPrice);    
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
        this.setState({ ingredients: updateIngredient, totalPrice: newPrice }, ()=> {
            //console.log(this.state.ingredients);  
            this.updatePurchasesAble();  
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
            this.setState({ ingredients: updateIngredient, totalPrice: newPrice }, ()=> {
                //console.log(this.state.ingredients);   
                this.updatePurchasesAble();  
           });
        }  
    };  

    purchaesHandaler = () => {
        this.setState({purchaesing: true});
    }
    purchaesClosedHandaler = () => {
        this.setState({purchaesing: false});
    }

    purchaesContinueOrderHandaler = () => {
        const currentState = {
            price: this.state.totalPrice
        }
        let queryParam = [];
        for(let i in this.state.ingredients){
            queryParam.push(encodeURIComponent(i)+'=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParam.join('&'); 

        //console.log(this.props);
        this.props.history.push({
            pathname:'/check-out',
            search: '?'+queryString,
        }, currentState);
        //const url = null;
    }

    render () {  
        //console.log(this.props);
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0; 
        }
 
        let orderSummery = null;
        let burger = <Spinner/>;
        if(this.state.ingredients){
            burger = (
                <Oux>
                    <Burger ingredients={this.state.ingredients} /> 
                    <BuildControls 
                        ingredientAdd={this.addIngredientHandal} 
                        ingredientRemove={this.removeIngredientHandal} 
                        disabled={disableInfo} 
                        price={this.state.totalPrice} 
                        ordered={this.purchaesHandaler}
                        purchasesAble={this.state.purchasesAble}/>
                </Oux>
            );
            orderSummery = <OrderSummery 
                ingredients={this.state.ingredients} 
                modalClosed={this.purchaesClosedHandaler}
                continueOrder={this.purchaesContinueOrderHandaler}
                price={this.state.totalPrice}/>;
                
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

export default WithErrorHandal(BurgerBuilder, axios);