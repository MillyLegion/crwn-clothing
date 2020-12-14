import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './header.scss';
// to import svg in react
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="shop/">
          SHOP
        </Link>
        <Link className="option" to="shop/">
          CONTACT
        </Link>
          {
            currentUser ? 
            (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
            :
            (<Link className="option" to='/signin'>SIGN IN</Link>)
          }
      </div>
    </div>
  )
};
// mapStateToProps - default naming from redux
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);