import React, {useState} from "react";

function computeInitialCounter(){
  return Math.trunc(Math.random() * 20)
}


function App() {
  // const [counter , setCounter] = useState(0)
  // const [counter , setCounter] = useState(computeInitialCounter())
  const [counter , setCounter] = useState(()=>{
    return computeInitialCounter()
  })

  const [state , setState] = useState({
    title: 'Counter',
    date: Date.now()
  })



  function increment(){
    // setCounter(counter + 1)
    setCounter((prevCounter) => {
      return prevCounter + 1
    })
    setCounter(prev => prev + 1)
  }
  function decrement(){
    setCounter(counter - 1)
  }

  function updateTitle(){
    setState(prev => {
      return {
        ...prev,
        title: 'new name'
      }
    })
  }

  return (
    <div>
      <h1>Counter: {counter} </h1>
      <button onClick={increment} >Up</button>
      <button onClick={decrement} >Down</button>


      <button onClick={updateTitle} >Go</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>

    </div>
  )
}

export default App;
