import React , {useState} from 'react'

function HookStateFour(){

    const[items , setItems] = useState([])
    const addItem = () => {
        //spread operators... will help to copy the existing items in the array
        setItems ([...items, {
            id: items.length,
            // math random will generate random number between o to 1
            value: Math.floor (Math.random() *20) +1
        }])
        
    }
    return(
        <div>
            <button onClick = {addItem}>Add a number</button>
<ul>
    {items.map(item => (
        <li key = {item.id}>{item.value}</li>
    ))}
</ul>
        </div>
    )
}
export default HookStateFour;