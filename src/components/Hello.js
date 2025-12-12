import React, { Component } from 'react';
//without jsx element
// const Hello = () => {
// return (
//     <div> 
//          <h1>Hello from Hello Component!</h1>
//     </div>
// )
// }

// export default Hello;

// const Hello = () => {
//     return React.createElement('div', null, 
//         React.createElement('h1', null, 'Hello from Hello Component using createElement'));
// }
// export default Hello;
// with jsx claass component
const Hello = () => {
    return React.createElement('div', 
    {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello from Hello Component using createElement with attributes'));
}
export default Hello;  