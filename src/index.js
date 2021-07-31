import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';

// having completed the actions, reducers and store, now pass this data to view to render.
// Import the store here.
import { store } from './app/store.js';

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
};
render();

// without this step, inventory.js 's useEffect(onMount, [dispatch]); after rendering to loadData won't work. 
// need a new render() call each time store changes.

// Subscribe render to the store.
store.subscribe(render); // when any state changes occur, render() is called to render App with up to date data. 