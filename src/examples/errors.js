import React, {useState, useEffect, useRef} from "react";

function App() {
  const [renderCount , setRenderCount] = useState(1)

  useEffect(()=>{
    setRenderCount(prev => prev + 1)
  })

  
  return (
    <div>
      <h1>Renders: {renderCount}</h1>
    </div>
  )
}

export default App;
