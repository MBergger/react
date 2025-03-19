
const Infolista = ({ taulukko }) => {
  return (
    <ul>
      {taulukko.map((tieto, index) => (
        <li key={index}>{tieto}</li>
      ))}
    </ul>
  );
};

export default Infolista;