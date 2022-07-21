import React, {useState, useEffect, useRef, useMemo} from "react";

function complexCompute(num) {
  let i = 0
  while(i<100000000) i++
  return num * 2

}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles =  useMemo(()=>{
    return {
        color: colored ? 'darkred' : 'black'
    }
  },[colored])

  const computed = useMemo(()=>{
    return complexCompute(number)
  }, [number])
  
  useEffect(()=>{
    console.log('styles changed');
  },[styles])

  return (
    <div>
      <h1 style={styles} >Okey: {computed}</h1>
      <button onClick={()=> setNumber(prev => prev + 1)}>Create</button>
      <button onClick={()=> setNumber(prev => prev - 1)}>Down</button>
      <button onClick={()=> setColored(prev => !prev)}>Yeah</button>


    </div>
  )
}

export default App;
