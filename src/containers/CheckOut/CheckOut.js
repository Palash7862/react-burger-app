import React, { Component } from 'react';
import { connect } from 'react-redux';
import Oux from './../../hoc/Oux/Oux';
import WithErrorHandal from '../../hoc/WithErrorHandal/WithErrorHandal';
import Burger from '../../components/Burger/Burger';
import ContactData from './ContactData/ContactData';
import Button from '../../components/UI/Button/Button'; 
import axios from '../../hoc/AxiosOrder/AxiosOrder';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal'; 


class CheckOut extends Component {
    state = { 
        address: {
            name: '',
            email: '',
            address: '', 
            state: '', 
            zipcode: ''
        }, 
        contactFS: false, 
        loading: false,   
    } 

    componentWillMount(){
    }

    checkoutCancelHandaler = () => { 
        this.props.history.push('/');
    }
    contactFormShowHandaler = () => {
        this.setState({contactFS: true});
    }

    orderPlaceHandaler = (event) =>{
        event.preventDefault();  
        this.setState({loading: true});
        const order = {
            ingredient: this.props.ings,
            price: this.props.price, 
            customer: {
                name: this.state.address.name, 
                email: this.state.address.email, 
                address: {
                    state: this.state.address.state,
                    zipcode: this.state.address.zipcode,
                    country : 'Bangladesh'
                } 
            }, 
            deliveryMethod: 'Fast Way'
        }
        axios.post('/order.json', order)
            .then(response=>{
               // console.log(response);
                this.setState({loading: false}); 
                this.props.history.push('/');
            })
            .catch(error=>{
                this.setState({loading: false});
                //console.log(error.getMessage());
            });
        
    }
    inputChangeHandaler =  (event) => { 
        const InputName = event.target.name;
        const InputValue = event.target.value; 
        let newaddress = {
            ...this.state.address
        } 
        newaddress[InputName] = InputValue;
        this.setState({address: newaddress});   
    }

    render(){
        let checkoutBtn = null;
        if(!this.state.contactFS){
            checkoutBtn = <Oux>
                <Button btnType="Danger" clicked={ this.checkoutCancelHandaler} >Cancel</Button>
                <Button btnType="Success" clicked={ this.contactFormShowHandaler}>Continue</Button>
                </Oux>;
        }  
        return (
            <Oux> 
                <div className="checkout-warp" style={{textAlign: 'center'}}>
                    <Burger ingredients={this.props.ings} />
                    {  checkoutBtn }
                </div> 
                {this.state.contactFS ? <ContactData 
                    orderPlaceHandaler={this.orderPlaceHandaler} 
                    inputChangeHandaler={this.inputChangeHandaler} /> : null }
               {this.state.loading ? 
                    <Modal show={this.state.loading} >
                        <Spinner/> 
                    </Modal>
                : null }
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
export default connect(mapStateToProps)(WithErrorHandal(CheckOut, axios));