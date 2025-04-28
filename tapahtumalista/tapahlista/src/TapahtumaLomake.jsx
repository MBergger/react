import React, { useState } from "react";


const TapahtumaLomake = ({ lisaaTapahtuma }) => {
  const [nimi, setNimi] = useState("");
  const [paivamaara, setPaivamaara] = useState("");
  const [kategoria, setKategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nimi && paivamaara && kategoria) {
      lisaaTapahtuma({ nimi, paivamaara, kategoria });
      setNimi("");
      setPaivamaara("");
      setKategoria("");
    }
  };

  return (
    <form className="tapahtuma-lomake" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tapahtuman nimi"
        value={nimi}
        onChange={(e) => setNimi(e.target.value)}
      />
      <input
        type="date"
        value={paivamaara}
        onChange={(e) => setPaivamaara(e.target.value)}
      />
      <select value={kategoria} onChange={(e) => setKategoria(e.target.value)}>
        <option value="">Valitse kategoria</option>
        <option value="tyo">Työ</option>
        <option value="vapaa-aika">Vapaa-aika</option>
        <option value="muu">Muu</option>
      </select>
      <button type="submit">Lisää tapahtuma</button>
    </form>
  );
};

export default TapahtumaLomake;