import { useState } from 'react'
import '../style/Button.css'

function Button({ text, variant, callback}) {

  let clickHandler = function(e){
    console.log(e)
    console.log(typeof undefined)
  }

  classRenderer = function (){
    let classes = [
      'Button', variant
    ]
    return classes.join(" ")
  }

  return (
    <div onClick={clickHandler} className={classRenderer()}>
      { text }
    </div>
  )
}

export default Button

/*

<button id={props.id}>{props.children}</button>

const [count, setCount] = useState(0)

*/