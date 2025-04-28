import * as React from 'react'
import LaskuriNaytto from './LaskuriNaytto'
 
function Counter() {
    const [count, setCount] = React.useState(0);
 
    const increase = () => setCount(count + 1);
    const decrease = () =>  setCount(count - 1)
    const double = () => setCount(count + 2);
    const reset = () => setCount(0)
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increase}>Nosta</button>
        <button onClick={decrease}>Laske</button>
        <button onClick={double}>TUPLAA</button>
        <button onClick={reset}>Nollaa</button>
      </div>
    );
}
 
export default Counter