import React from "react";

const OlioComponent = () => {
  // Opiskelija-olio
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 22,
    kurssi: "Full Stack Development",
  };

  // Auto-luokka
  class Auto {
    constructor(merkki, malli, vuosimalli) {
      this.merkki = merkki;
      this.malli = malli;
      this.vuosimalli = vuosimalli;
    }

    getTiedot() {
      return `${this.merkki} ${this.malli}, ${this.vuosimalli}`;
    }
  }

  // Luo auto-oliot
  const auto1 = new Auto("Toyota", "Corolla", 2015);
  const auto2 = new Auto("Tesla", "Model S", 2022);

  // Kirjat-taulukko
  const kirjat = [
    { nimi: "Lordi of the Rings", kirjailija: "J.R.R. Tolkien", vuosi: 1954 },
    { nimi: "1984", kirjailija: "George Orwell", vuosi: 1949 },
    { nimi: "Clean Code", kirjailija: "Robert C. Martin", vuosi: 2008 },
  ];

  return (
    <div>
      <h2>Opiskelija</h2>
      <p>Nimi: {opiskelija.nimi}</p>
      <p>Ikä: {opiskelija.ika}</p>
      <p>Kurssi: {opiskelija.kurssi}</p>

      <h2>Autot</h2>
      <p>{auto1.getTiedot()}</p>
      <p>{auto2.getTiedot()}</p>

      <h2>Kirjat</h2>
      <ul>
        {kirjat.map((kirja, index) => (
          <li key={index}>
            {kirja.nimi} - {kirja.kirjailija} ({kirja.vuosi})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OlioComponent;
