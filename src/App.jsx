import { useState } from 'react'
import './style/App.css'
import Button from './components/Button'
import Dropdown from './components/Dropdown'
import Text from './components/Text'

function App() {
  const [joke, setJoke] = useState("")
  const [categories, setCategories] = useState([])

  let url = "https://api.chucknorris.io/jokes/categories";

  fetch(url).then((resp) => {
    return resp.json();
  })
    .then((data) => {
      data.unshift("random")
      setCategories(data)
    })

  let loadJokeCallback = function () {
    let catChosen = document.getElementById("dropdown").value
    let URLO = "https://api.chucknorris.io/jokes/random" + (catChosen != "random" ? "?category=" + catChosen : "")
    fetch(URLO).then((resp) => {
      return resp.json();
    })
      .then((data) => {
        setJoke(data.value)
      })
  }

  let copyTextCallback = function () {
    navigator.clipboard.writeText(document.getElementById("jokeToClipboard").innerText);
  }

  return (
    <div className="App" align="center">
      <Text variant="Title">Webapp API Chuck Norris</Text>
      <Text variant="subTitle">Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</Text>
      <img src="https://avatars.githubusercontent.com/u/17794049?s=200&v=4" alt="Immagine Chuck Norris" width="280px" height="280px" ></img>
      <Dropdown id='dropdown' values={categories}></Dropdown>
      <Text variant="copyText" id="jokeToClipboard">{joke}</Text>
      <Button text="CARICA JOKE" callback={loadJokeCallback} />
      <Button text="COPIA" variant={joke == "" ? "disabled" : undefined} callback={copyTextCallback} />
      
    </div>
  )
}

export default App