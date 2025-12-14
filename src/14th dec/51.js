import React, {useState, useEffect} from 'react';

function HookCounterOne(){

    const[count, setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(() => {
        console.log('useeffect updating title')
        document.title = `You clicked ${count} times`
    }, [count]);//if we dont want to destructure the inn array then we can use prevCount => prevCount+1 in usestate

//}, [count] );  // to run only when count changes we pass [count] as second argument
// empty array means to run only once when component mounts

return(
    <div> 
        <input type ='text' value = {name} onChange = {e => setName(e.target.value)} />
        <button onClick = {() => setCount(count + 1)}>Click {count} times</button>
         </div>
)
}
export default HookCounterOne;