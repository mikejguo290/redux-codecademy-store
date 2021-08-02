// Import createStore and combineReducers here.
import { createStore,  combineReducers } from "redux";
// Import the slice reducers here.
import {cartReducer} from '../features/cart/cartSlice';
import {currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice';
import {inventoryReducer} from '../features/inventory/inventorySlice';
import {searchTermReducer} from '../features/searchTerm/searchTermSlice';

// Create and export the store here.
const reducers = {
    // like a blue print for the state obj eventually returned by createStore(rootReducer). with namespacing each state to the keys set here. 
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    inventory: inventoryReducer,
    searchTerm: searchTermReducer,
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);