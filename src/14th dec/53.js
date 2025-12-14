import React, {useState} from "react"
import HookMouse from './52';

function MouseContainer() {
    const[display, setDisplay] = useState(true)
    return(
    <div>
        <button onClick = {() => setDisplay(!display)}>toggle button</button>
        {display && <HookMouse/>}
        </div>
)
}

// component did unmount and cleanup code by returning function from where the function is called.

export  default MouseContainer;