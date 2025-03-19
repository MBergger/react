import Tervehdys from "./Tervehdys";
import Infolist from "./Infolista";

const Kayttajakortti = ({ nimi, lista }) => {
  return (
    <div>
      <Tervehdys nimi={nimi} />
      <Infolist lista={lista} />
    </div>
  );
};

export default Kayttajakortti;
