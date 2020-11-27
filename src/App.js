import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';


const HatsPage = () => {
  return (
    <div className='homepage'>
      <h1>Hats page</h1>
    </div>
  )
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={HatsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
