import { useState } from 'react'

import '../style/Button.css'

function Button(props) {
  const [count, setCount] = useState(0)

  return (
    <div className="Button">
      <button id={props.id}>{props.children}</button>
    </div>
  )
}

export default Button
