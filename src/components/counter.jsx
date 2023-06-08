import React, {useState} from "react";

import '../stylesheets/counter.css'
const Counter = () => {
 
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return(
    <div className="countererContainer">
        <h1> Counterer: {count} </h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
    </div>
    
  );

}

export default Counter;