import { useState } from 'react'
import './App.css'
import Map from './components/map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Map/>
    </div>
  )
}

export default App
