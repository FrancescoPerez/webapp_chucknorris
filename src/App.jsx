import { useState } from 'react'
import './style/App.css'
import Button from './components/Button'
import Dropdown from './components/Dropdown'

function App() {
  const [joke, setJoke] = useState("")

let loadJokeCallback = function (){
  console.log ("ciao")
  setJoke("testo joke")
}

let copyTextCallback = function (){
  console.log ("bye")
}

  return (
    <div className="App">
      <h1>Webapp API Chuck Norris</h1>
      <h2>Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</h2>
      
      <Button text="CARICA JOKE" callback={loadJokeCallback} />
      <Button text="COPIA" variant={ joke == "" ? "disabled" : undefined} callback={copyTextCallback}/>
    </div>
  )
}

export default App



/*
<Button id='load'>CARICA JOKE</Button>
<Dropdown id='dropdown'></Dropdown>



*/