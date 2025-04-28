const Linkkilista = ({ lista }) => {
  return (
      <ul>
          {lista.map((linkki, index) => (
              <li key={index}>
                  <a href={linkki.url}>{linkki.nimi}</a>
              </li>
          ))}
      </ul>
  );
};

export default Linkkilista;