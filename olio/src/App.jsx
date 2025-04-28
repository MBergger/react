import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // 1. Opiskelija-olio
    const opiskelija = {
      nimi: "Anna Virtanen",
      ika: 22,
      kurssi: "Tietojenkäsittelytiede"};

    console.log(opiskelija.nimi);
    console.log(opiskelija.ika);
    console.log(opiskelija.kurssi);

    // 2. Auto-luokka
    const auto = {merkki: "Fiat", 
      malli: "500",
      vuosimalli: 1980}

    console.log(auto.merkki)
    console.log(auto.malli)
    console.log(auto.vuosimalli)



    // 3. Kirjataulukko
    const kirjat = [
      { nimi: "Tuntematon sotilas", kirjailija: "Väinö Linna", vuosi: 1954 },
      { nimi: "Sinuhe egyptiläinen", kirjailija: "Mika Waltari", vuosi: 1945 },
      { nimi: "Seitsemän veljestä", kirjailija: "Aleksis Kivi", vuosi: 1870 }
    ];

    console.log("Kirjojen tiedot:");
    kirjat.forEach((kirja, index) => {
      console.log(`${index + 1}. Nimi: ${kirja.nimi}, Kirjailija: ${kirja.kirjailija}, Vuosi: ${kirja.vuosi}`);
    });
  }, []); // useEffect tyhjällä riippuvuuslistalla, ajetaan kerran

  
  return (
    <div>
      <h1>Katso konsolia!</h1>
    </div>
  );
}

export default App;
