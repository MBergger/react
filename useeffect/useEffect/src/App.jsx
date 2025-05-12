import React, { useState, useEffect } from 'react';

function App() {
  const [kayttajaId, setKayttajaId] = useState(1);
  const [kayttaja, setKayttaja] = useState(null);
  const [postaukset, setPostaukset] = useState([]);
  const [ladataan, setLadataan] = useState(false);

  useEffect(() => {
    const haeData = async () => {
      setLadataan(true);
      try {
        const kayttajaVastaus = await fetch(`https://jsonplaceholder.typicode.com/users/${kayttajaId}`);
        const postauksetVastaus = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${kayttajaId}`);

        const kayttajaData = await kayttajaVastaus.json();
        const postauksetData = await postauksetVastaus.json();

        setKayttaja(kayttajaData);
        setPostaukset(postauksetData);
      } catch (virhe) {
        console.error('Virhe haettaessa tietoja:', virhe);
        setKayttaja(null);
        setPostaukset([]);
      } finally {
        setLadataan(false);
      }
    };

    haeData();
  }, [kayttajaId]);

  return (
    <div >
      <h1 >Käyttäjän tiedot ja postaukset</h1>
      <div>
        <button
       
          onClick={() => setKayttajaId((id) => Math.max(id - 1, 1))}
        >
          Edellinen käyttäjä
        </button>
        <button
          onClick={() => setKayttajaId((id) => id + 1)}
        >
          Seuraava käyttäjä
        </button>
      </div>

      {ladataan ? (
        <p>Ladataan tietoja...</p>
      ) : kayttaja ? (
        <div>
          <h2 >{kayttaja.name}</h2>
          <p><strong>Sähköposti:</strong> {kayttaja.email}</p>
          <p><strong>Yritys:</strong> {kayttaja.company?.name}</p>
          <p><strong>Kaupunki:</strong> {kayttaja.address?.city}</p>

          <h3 >Postaukset:</h3>
          <ul >
            {postaukset.map(postaus => (
              <li key={postaus.id}>
                <strong>{postaus.title}</strong>
                <p>{postaus.body}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Käyttäjää ei löytynyt.</p>
      )}
    </div>
  );
}

export default App;
