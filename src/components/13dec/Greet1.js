import React from 'react';
// destructuring props method 1
// const Greet = ({name, heroName}) =>  {

//     return (
//     <div>
//         <h1>HI this is {name} as {heroName}</h1>
    
//     </div>   
//     )
//}
//destructuring props method 2

const Greet = props =>  {
   const {name, heroName} = props;

    return (
    <div>
        <h1>HI this is {name} as {heroName}</h1>
    
    </div>   
    )
}
export default Greet;