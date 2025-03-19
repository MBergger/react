const Infolista = ({ lista }) => {
    return (
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default Infolista;
  