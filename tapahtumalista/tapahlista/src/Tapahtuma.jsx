import React from "react";


const Tapahtuma = ({ tapahtuma, poistaTapahtuma }) => {
  return (
    <div className={`tapahtuma ${tapahtuma.kategoria}`}>
      <h3>{tapahtuma.nimi}</h3>
      <p>{tapahtuma.paivamaara}</p>
      <button onClick={() => poistaTapahtuma(tapahtuma.id)}>Poista</button>
    </div>
  );
};

export default Tapahtuma;
