import React, {useState, useEffect, useRef} from "react";


function App() {
  // const [renderCount , setRenderCount] = useState(1)
  const [value,setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prefValue = useRef('')

  useEffect(()=>{
    renderCount.current++
    // console.log(inputRef.current.value);
  })
  useEffect(()=>{
    prefValue.current = value
  },[value])

  const focus = ()=> inputRef.current.focus()
  
  return (
    <div>
      <h1>Renders: {renderCount.current}</h1>
      <h2>Back renders: {prefValue.current}</h2>

      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default App;
