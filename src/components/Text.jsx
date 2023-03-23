import { useState } from 'react'
import '../style/Text.css'

function Title(props, variant) {

    let classRenderer = function (){
        let classes = [
          'Text', variant
        ]
        return classes.join(" ")
      }


    return (
        <div className={classRenderer()}>
            <p>{props.children}</p>
        </div>
    )
}

export default Title