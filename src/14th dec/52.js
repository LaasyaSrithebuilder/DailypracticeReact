import React, {useState, useEffect} from "react";

function HookMouse() {
    const[x, setX] = useState(0)
    const[y,setY] = useState(0)

    const logmousepos = e => {
        console.log('mouseevent')
        setX(e.clientX)
        setY(e.clientY)
    }
// component did mount useeffect is used to handle side 
// effects in functional componentsit actually combines component did mount ,
//  component did update and component will unmount
// it runs after every render by default. here we are destructing its dependency list to an empty array
    useEffect (()=>{
        console.log("mouseevent")
        window.addEventListener('mousemove',logmousepos)

        return () => {
            console.log("componenet unmounting")
            window.removeEventListener('mousemove', logmousepos)
        }
    },[])
    
    //empty array so that it will be called only once  its dependency list is destructed so that it will be called only once
return(
    <div>
        <h1> hooks</h1>
        <h2> X - {x} Y - {y} </h2>
        </div>
)
}
export  default HookMouse;