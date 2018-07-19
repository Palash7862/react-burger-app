import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import OrderDetails from './containers/OrderDetails/OrderDetails';

class App extends Component { 
  render() {
    return ( 
      <div className='Palash'>
          <Layout>
              <Switch>
                  <Route path="/"  exact component={BurgerBuilder} /> 
                  <Route path="/check-out" exact component={CheckOut} /> 
                  <Route path="/orders" exact component={OrderDetails} /> 
              </Switch>
          </Layout>
      </div> 
    );
  }
}

export default App;
