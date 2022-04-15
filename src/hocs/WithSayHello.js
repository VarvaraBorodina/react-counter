import React, { Component } from "react";
import { useCallback } from "react";

const WithSayHello = (Component) => () => {
  const sayHello = useCallback(() => {
    alert(`Hello`);
  }, []);
  return <Component sayHello={sayHello} />;
};

export default WithSayHello;
