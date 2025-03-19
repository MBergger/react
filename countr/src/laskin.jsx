import React, { useState } from "react";
import LaskuriNaytto from "./LaskuriNaytto";
import Painike from "./Painike";

const Counter = () => {
  const [count, setCount] = useState(0);
  const nollaus = () => setCount(0)
  const kasvatus = () => setCount(count + 1)
  const vahennys  = () => setCount(count - 1)
  const tupla = () => setCount(count + 2)
  /**<button onClick={nollaus}>Nollaus</button>
          <button onClick={kasvatus}>kasvatus</button>
          <button onClick={vahennys}>vahennys</button>
          <button onClick={tupla}>tupla</button> */
  return (
    <div className="counter">
      <Painike onClick={kasvatus} nimi={"Kasvatus"} />
      <Painike onClick={tupla} nimi={"Tupplaa"}/>
      <Painike onClick={vahennys} nimi={"Vähennys"}/>
      <Painike onClick={nollaus} nimi={"Nollaa"}/>
      <LaskuriNaytto count={count}/>
      
          
    </div>
  );
};

export default Counter;
