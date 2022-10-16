import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generatedClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSignIn = () => {
    console.log('signed in');
    setIsSignedIn(true);
  };
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generatedClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              {/* <Route path='/auth' component={AuthLazy} />
              <Route path='/' component={MarketingLazy} /> */}
              <Route path='/auth' component={AuthLazy}>
                <AuthLazy onSignIn={() => handleSignIn()} />
              </Route>
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
