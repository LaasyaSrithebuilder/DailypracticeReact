import React, { Component } from 'react';

class Usergreeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        
    
          if (this.state.isLoggedIn) {

    return (
        <div> Welcome bro
        </div>
    )
} else {        
    return (
        <div> Welcome guest
        </div>  
    )
}
        
    }   
}       
export default Usergreeting;