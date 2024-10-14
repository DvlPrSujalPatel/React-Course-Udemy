import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  //let counter = 15;

  const addValue = () => { 
    setCounter(counter + 1);
  }

  const removeValue = () => { 
    if(counter > 0) {
      setCounter(counter - 1)
    }
    else {
      setCounter(0)
    }
  }

  return (
    <>
     <h1>React Course With hitesh {counter} </h1>
     <h2>Counter value:{counter} </h2>
     <button
     onClick={addValue}
     >Add Value</button>{" "}
     <button onClick={removeValue}>Remove Value</button>
     <p>footer:{counter} </p>
    </>
  )
}

export default App
