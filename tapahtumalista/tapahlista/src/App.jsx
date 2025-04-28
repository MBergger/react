import React, { useState } from "react";

import TapahtumaLomake from "./TapahtumaLomake";
import TapahtumaLista from "./TapahtumaLista";


function App () {
  const [tapahtumat, setTapahtumat] = useState([]);

  const lisaaTapahtuma = (tapahtuma) => {
    setTapahtumat([...tapahtumat, {  ...tapahtuma, id: Date.now() }]);
  };

  const poistaTapahtuma = (id) => {
    setTapahtumat(tapahtumat.filter((t) => t.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Tapahtumasovellus</h1>
      <TapahtumaLomake lisaaTapahtuma={lisaaTapahtuma} />
      <TapahtumaLista tapahtumat={tapahtumat} poistaTapahtuma={poistaTapahtuma} />
    </div>
  );
};

export default App;