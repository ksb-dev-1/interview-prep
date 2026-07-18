/*

const [state, dispatch] = useReducer(reducer, initialState);

--> reducer → a pure function that decides how the state should change
--> initialState → the starting value of your state
--> state → current state value
--> dispatch → function to send an action to the reducer

*/

import { useReducer } from "react";

type State = { count: number };
type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state; // return current state if unknown action
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
