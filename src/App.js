import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import SHOP_DATA from './pages/shop/ShopPage';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
