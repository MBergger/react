import Infolista from "./Infolista"
import Tervehdys from "./Tervehdys"
 
function Kayttajakortti({nimi, lista}){
    return(
        <>
        <Tervehdys valitettynimi={nimi}/>
        <Infolista taulukko={lista}/>
        </>
    )
}
 
export default Kayttajakortti