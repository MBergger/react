import Kayttajakortti from "./Kayttajakortti";

function App() {
  return (
    <div>
      <Kayttajakortti nimi="Matias" lista={["React", "JavaScript", "CSS"]} />
    </div>
  );
}

export default App;
