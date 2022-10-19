import { createApp } from 'vue';
import Dashboard from './components/Dashboard';

// Mount function to start the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

/* Scenario 1 - Development mode - In Isolation
If we are in development and in isolation, call mount immediately.
*/
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

/*Scenario 2 - Running inside container
When we are running through container, export the mount function
*/
export { mount };
