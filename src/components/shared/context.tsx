import { createContext, ReactNode, useContext, useReducer } from "react";
import { actionType, Dispatch } from "../types/ActionTypes";

const defaultState = { count: 0 };
export type State = typeof defaultState;

const counterContex = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);
const counterReducer = (state: State, action: actionType) => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(counterReducer, defaultState);
  return (
    <counterContex.Provider value={{ state, dispatch }}>
      {children}
    </counterContex.Provider>
  );
};

export function useCounter() {
  const context = useContext(counterContex);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
