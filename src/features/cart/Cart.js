import React from 'react';
import {
  calculateTotal,
  getCurrencySymbol,
} from '../../utilities/utilities.js';

// Import the changeItemQuantity() action creator.
import { changeItemQuantity } from './cartSlice.js';

export const Cart = (props) => {
  const { cart, currencyFilter, dispatch } = props;

  const onInputChangeHandler = (name, input) => {
    // If the user enters a bad value...
    if (input === '') {
      return;
    }

    // Otherwise, convert the input into a number and pass it along as the newQuantity.
    const newQuantity = Number(input);

    // Dispatch an action to the store to change the quantity of the given name and quantity.
    dispatch(changeItemQuantity(name, newQuantity)); // updates cart with name and quantity -> e.g. cart = {hat:20, shirt: 10}
  };

  // Use the cart and currencyFilter slices to render their data.
  let cartElements = []; // initialise with empty array
  cartElements = Object.keys(cart).map(name => createCartItem(name)); //cartElements need to call on createCartItem to create array of cart objects. could be a separate component!
  // caculate the total cost of cart, 
  // takes in cart object and currency selected and calculate total = item x item quantity summed over all items. 

  const total = calculateTotal(cart, currencyFilter); // total is recalculated each cart is updated!

  return (
    <div id="cart-container">
      <ul id="cart-items">{cartElements}</ul>
      <h3 className="total">
        Total{' '}
        <span className="total-value">
          {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
        </span>
      </h3>
    </div>
  );

  function createCartItem(name) {
    // item object, name, then a select options input with value set to item.quantity and an eventHandler to call dispatch and change that.
    const item = cart[name];

    if (item.quantity === 0) {
      return;
    }

    return (
      <li key={name}>
        <p>{name}</p>
        <select
          className="item-quantity"
          value={item.quantity}
          onChange={(e) => {
            onInputChangeHandler(name, e.target.value);
          }}
        >
          {[...Array(100).keys()].map((_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </li>
    );
  }
};
