import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + 1 };
    case "decrement":
      return {
        firstCounter: state.firstCounter > 0 ? state.firstCounter - 1 : 0,
      };
    default:
      return state;
  }
};

function NumberOfProducts() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl">{count.firstCounter}</h1>
      <button
        className="rounded w-[35px] h-[35px] px-3 pb-1 m-2 bg-slate-500 text-white font-bold text-xl"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button
        className="rounded w-[35px] h-[35px] px-3 pb-1 m-2 bg-slate-500 text-white font-bold text-xl"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
    </div>
  );
}

export default NumberOfProducts;
