import { useState } from 'react'
import '../style/Text.css'

function Title(props) {

    let classRenderer = function (){
        let classes = [
          'Text', props.variant
        ]
        return classes.join(" ")
      }

    return (
        <div className={classRenderer()}>
            <p className={props.variant}>{props.children}</p>
        </div>
    )
}

export default Title