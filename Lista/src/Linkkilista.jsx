const Linkkilista = ({ lista }) => {
    return (
      <ul>
        {lista.map((linkki, index) => (
          <li key={index}>
            <a href={linkki.url} target="_blank" rel="noopener noreferrer">
              {linkki.nimi}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
export default Linkkilista;