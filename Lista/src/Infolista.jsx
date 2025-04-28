function Infolista({taulukko}){
  return(
      <div>    
      <h1>Tässö on listaus</h1>
      <ul>
   {taulukko.map((item, index) => (
        <li key={index}>{item}</li>
    ))}
</ul>
</div>
  )
}
export default Infolista