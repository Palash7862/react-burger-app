import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';

class App extends Component { 
  render() {
    return ( 
      <div className='Palash'>
          <Layout>
              <Switch>
                  <Route path="/"  exact component={BurgerBuilder} /> 
                  <Route path="/check-out" exact component={CheckOut} /> 
              </Switch>
          </Layout>
      </div> 
    );
  }
}

export default App;
