import React, {useState} from 'react'

// function HookCounterTwo(){

//     const  initialCount = 0
//     const [count, setCount1] = useState(initialCount)
//     return (
//         <div>
//             Count : {count}

//         <button onClick ={ () => setCount1(initialCount)}>Reset</button>
//         <button onClick ={ () => setCount1(count + 1)}>Increment</button>
//         <button onClick ={ () => setCount1(count - 1)}>Decrement</button>
//         </div>
//     )
// }
// export default HookCounterTwo;

function HookCounterTwo(){

    const  initialCount = 0
    const [count, setCount1] = useState(initialCount)
    const incrementTen = () => {
        for (let i =0;i<10;i++){
            setCount1(prevCount => prevCount +1 )
    }
}
    return (
        <div>
            Count : {count}

        <button onClick ={ () => setCount1(initialCount)}>Reset</button>
        <button onClick ={ () => setCount1(prevCount => prevCount + 1)}>Increment</button>
        <button onClick ={ () => setCount1(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick = {incrementTen}>Increment 10  </button>
        </div>
    )
}

export default HookCounterTwo;