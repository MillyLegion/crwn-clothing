import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import SHOP_DATA from './pages/shop/ShopPage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
