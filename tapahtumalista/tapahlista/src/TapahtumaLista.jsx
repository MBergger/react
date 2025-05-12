import React from "react";
import Tapahtuma from "./Tapahtuma";
import './TapahtumaLista.css';


const TapahtumaLista = ({ tapahtumat = [], poistaTapahtuma }) => {
  return (
    <div className="tapahtuma-lista">
      {tapahtumat.length > 0 ? (
        tapahtumat.map((t) => (
          <Tapahtuma key={t.id} tapahtuma={t} poistaTapahtuma={poistaTapahtuma} />
        ))
      ) : (
        <p>Ei lisättyjä tapahtumia</p>
      )}
    </div>
  );
};

export default TapahtumaLista;