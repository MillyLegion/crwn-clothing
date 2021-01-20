import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { HeaderContainere, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
// to import svg in react
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainere>
      <LogoContainer to='/'>
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="shop/">
          SHOP
        </OptionLink>
        <OptionLink to="shop/">
          CONTACT
        </OptionLink>
          {
            currentUser ? 
            (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
            :
            (<OptionLink to='/signin'>SIGN IN</OptionLink>)
          }
          <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown />
      }
    </HeaderContainere>
  )
};
// mapStateToProps - default naming from redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);