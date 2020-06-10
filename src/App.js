import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/checkout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/" exact component={BurgerBuilder}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
