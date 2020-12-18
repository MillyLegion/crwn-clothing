// 2 types of selectors: 1. input 2. output
import { createSelector } from 'reselect';

// getting input
const selectCart = state => state.cart;

// const selectUser = state => state.user;

export const selectCartItems = createSelector(
  [selectCart], // input selector
  // function - returns the value we want from  this selector. gets multiply values
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity, 
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price, 
      0
    )
);