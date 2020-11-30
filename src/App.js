import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // onChange in firebase this will re-render
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });

      console.log(user);
    }); 
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <BrowserRouter>
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
