import React, { Component } from 'react';
import Oux from '../../hoc/Oux';

class BurgerBuilder extends Component {
    render () {
        return (
            <Oux>
                <div> Burger </div>
                <div> Build Controls </div>
            </Oux>
        );
    }
}

export default BurgerBuilder;