import React, { Component } from 'react';
//through if else conditionally rendering components
class Usergreeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true 
        }
    }
   // render() {
        
    
//           if (this.state.isLoggedIn) {

//     return (
//         <div> Welcome bro
//         </div>
//     )
// } else {        
//     return (
//         <div> Welcome guest
//         </div>  
//     )
// }
        
//     }   

    //using variable and if else
    
        
    // render() { 

    //     let message;
    //     if (this.state.isLoggedIn) {
    //         message = <div>"WELCOME BRO"</div>
    //     }
    //     else{
    //         message =
    //     <div>
    //     "wELCOME SIS"
    //     </div>
    //     }
    // return <div>{message}</div>
    // }

  
    //using ternary operator

    // render(){
    //     return this.state.isLoggedIn ? ( <div> WELCOME bRO</div> ) : (<div> WELCOME sIS</div>);
    // }  

    //using short circuit operator

    render(){
        return this.state.isLoggedIn && <div>Welcome</div>
    }
     
}


export default Usergreeting;