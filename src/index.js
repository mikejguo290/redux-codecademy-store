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
      
    />,
    document.getElementById('root')
  )
};
render();

// Subscribe render to the store.