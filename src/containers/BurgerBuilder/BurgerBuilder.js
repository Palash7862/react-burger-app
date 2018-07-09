import React, { Component } from 'react';
import Oux from '../../hoc/Oux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese:2,
            meat: 2
        }
    }

    render () {
        return (
            <Oux>
                <Burger ingredients={this.state.ingredients} />
                <div> Build Controls </div>
            </Oux>
        );
    }
}

export default BurgerBuilder;