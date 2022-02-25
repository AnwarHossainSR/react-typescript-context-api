import React from "react";
import Controlls from "./components/controlls";
import Display from "./components/Display";
import { useCounter } from "./components/shared/context";

const App = () => {
  const { state, dispatch } = useCounter();
  return (
    <>
      <Display {...state} />
      <Controlls handler={dispatch} />
    </>
  );
};

export default App;
