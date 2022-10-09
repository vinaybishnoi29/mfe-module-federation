import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import MarketingContainer from "./components/MarketingApp";
import Header from "./components/Header";

const generatedClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generatedClassName}>
        <div>
          <Header />
          <MarketingContainer />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
