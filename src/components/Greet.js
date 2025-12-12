import React from 'react';

// function Greet() {
//     return (
//         <h1>Hello from Greet Component!</h1>    
//     )
// }
// can only contaiin i html tag here div is consisderd as 1 html tag

const Greet = (props) =>  {
    console.log(props);
    return (
    <div>
        <h1>HI this is {props.name} as {props.heroName}</h1>
    {props.children}
    </div>   
    )
}

export default Greet;