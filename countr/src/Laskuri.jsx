import React, { useReducer } from "react";
import Naytto from "./Naytto";
import Painikkeet from "./Painikkeet";

// Reducer-funktio
function reducer(state, action) {
  switch (action.type) {
    case "KASVATA":
      return { laskuri: state.laskuri + 1 };
    case "VAHENNA":
      return { laskuri: state.laskuri - 1 };
    case "NOLLAA":
      return { laskuri: 0 };
    default:
      return state;
  }
}

const initialState = { laskuri: 0 };

export default function Laskuri() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Naytto arvo={state.laskuri} />
      <Painikkeet dispatch={dispatch} />
    </div>
  );
}

