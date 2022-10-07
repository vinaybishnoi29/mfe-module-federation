import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingContainer from "./components/MarketingApp";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
