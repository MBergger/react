import Linkkilista from "./Linkkilista"
import Infolista from "./Infolista"
import Counter from "./Counter"
import Kayttajakortti from "./Kayttajakortti"
function App() {
  const tiedot = ['React', 'JavaScript', 'CSS']
  const linkit = [{nimi: "Google", url: "https://google.com"}, {nimi: "React", url: "https://react.dev"}]
 
  return (
    <div>
     <Infolista taulukko={tiedot} />
     <Linkkilista lista={linkit} />
     <Counter />
     <Kayttajakortti nimi="Ville" lista={["React", "JavaScript", "CSS"]} />
    </div>
  )
}
 
export default App
 