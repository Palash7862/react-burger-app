import React, { Component } from 'react';
import Oux from '../../hoc/Oux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render () {
        return (
            <Oux>
                <Burger />
                <div> Build Controls </div>
            </Oux>
        );
    }
}

export default BurgerBuilder;