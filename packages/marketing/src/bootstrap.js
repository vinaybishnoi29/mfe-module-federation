import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

/* Scenario 1 - Development mode - In Isolation
If we are in development and in isolation, call mount immediately.
*/
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    console.log('test content');
    mount(devRoot);
  }
}

/*Scenario 2 - Running inside container
When we are running through container, export the mount function
*/
export { mount };
