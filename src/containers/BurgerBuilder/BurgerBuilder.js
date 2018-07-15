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

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice: 4,
        purchasesAble: false,
        purchaesing: false,
        loading: false
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
        this.setState({loading: true});
        const order = {
            ingredient: this.state.ingredients,
            price: this.state.totalPrice, 
            customer: {
                name: 'Palash',
                address: {
                    state: 'Test State 1',
                    zipcode: '5544',
                    country : 'Bangladesh'
                }, 
                email: 'palash@gmail.com'
            }, 
            deliveryMethod: 'Fast Way'
        }
        axios.post('/order.json', order)
            .then(response=>{
                this.setState({loading: false, purchaesing: false});
                console.log(response);
            })
            .catch(error=>{
                this.setState({loading: false, purchaesing: false});
                console.log(error);
            });
    }

    render () {  
        //console.log(this.props);
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0; 
        }

        let orderSummery = <OrderSummery 
            ingredients={this.state.ingredients} 
            modalClosed={this.purchaesClosedHandaler}
            continueOrder={this.purchaesContinueOrderHandaler}
            price={this.state.totalPrice}/>;
            if(this.state.loading){
                orderSummery = <Spinner/>;
        }
        
        return ( 
            <Oux>
                <Modal show={this.state.purchaesing} modalClosed={this.purchaesClosedHandaler}>
                    {orderSummery}
                </Modal>
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
    }
}

export default WithErrorHandal(BurgerBuilder, axios);