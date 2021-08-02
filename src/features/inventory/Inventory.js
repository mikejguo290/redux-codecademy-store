import React, { useEffect } from 'react';

import {
  calculatePrice,
  getCurrencySymbol,
} from '../../utilities/utilities.js';
import { addItem } from '../cart/cartSlice.js';
import { loadData } from './inventorySlice';

export const Inventory = ({ inventory, currencyFilter, dispatch }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]); 
  
  // Q. when does effect trigger?
  // A. loadData() is an action creator in inventorySlice that would hit inventoryReducer to set store:inventory = { inventoryData } from '../../data.js';
  // the effect sets inventory just once, on first rendering of Inventory. then store manages inventory state. 

  // Q.why is there no way to useEffect(onMount, []) without including 'dispatch' in depenency array.
  // useEffect uses 'dispatch' which gets passed in via props. should props.dispatch change. useEffect would have to change as onMount would change
  // not that dispatch would change. given every other bits of code around this. 

   // Q. why get data only after the component mounts? load data only in sideEffect?
  // A. is it to keep the functional component pure? is it to give user a better experience? render component and then wait for data to populate.

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };

  if (inventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>;
  }

  return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    const displayPrice = calculatePrice(price, currencyFilter);
    return (
      <li key={name} className="item">
        <img src={img} alt={''} />
        <h3>{name}</h3>
        <h3 className="price">
          {getCurrencySymbol(currencyFilter)}
          {displayPrice.toFixed(2)} {currencyFilter}
        </h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
