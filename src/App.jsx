import { useState } from 'react'
import './App.css'
import CanvasMap from './map/canvasMap'
import Map from './map/map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Map/> */}
      <CanvasMap/>
    </div>
  )
}

export default App
