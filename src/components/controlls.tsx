import React from "react";
import { Dispatch } from "./types/ActionTypes";

const Controlls = ({ handler }: { handler: Dispatch }) => {
  return (
    <div className="controll">
      <button onClick={() => handler("increment")}>+</button>
      <button onClick={() => handler("decrement")}>-</button>
    </div>
  );
};

export default Controlls;
