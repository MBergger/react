import { useState } from 'react'
import Infolista from './Infolistat.jsx'
import Linkkilista from "./Linkkilista.jsx";


function App() {
  const tiedot = ["React", "JavaScript", "CSS"];
  const linkit = [{nimi: "Google", url: "https://google.com"}, {nimi: "React", url: "https://react.dev"}];

  return (
    <div>
      
      <Infolista taulukko={tiedot} />
      <Linkkilista lista={linkit} />
    </div>
  );
}




export default App;

