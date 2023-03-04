import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Dropdown from './components/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button id='load'>CARICA JOKE</Button>
      <Dropdown id='dropdown'></Dropdown>
    </div>
  )
}

export default App
