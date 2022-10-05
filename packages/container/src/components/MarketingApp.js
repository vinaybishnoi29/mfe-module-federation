import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

const MarketingContainer = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};

export default MarketingContainer;
