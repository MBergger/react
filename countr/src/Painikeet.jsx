import React from "react";

export default function Painikkeet({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "KASVATA" })}>+1</button>
      <button onClick={() => dispatch({ type: "VAHENNA" })}>-1</button>
      <button onClick={() => dispatch({ type: "NOLLAA" })}>Nollaa</button>
    </div>
  );
}
