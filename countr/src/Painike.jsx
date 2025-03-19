function Painike({ onClick, nimi }) {
    return (
      <button onClick={onClick}>
        {nimi}
      </button>
    );
  }
  export default Painike