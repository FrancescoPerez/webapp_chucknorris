import { useState } from 'react'
import '../style/TestoJoke.css'

function TestoJoke(props) {


  return (
    <div className="TestoJoke">
        <p id={props.id}>{props.children}</p>
    </div>
  )
}

export default TestoJoke