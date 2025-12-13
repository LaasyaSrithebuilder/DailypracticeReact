import React,  { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
        super(props)
        this.state = {   
            Message : 'Hello'
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState( {
    //         Message : 'Goodbye!!'
    //     } )
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState( {
            Message : 'Goodbye!!'
        } )
    }   


    render() {
        return (
            <div>   
                <div>{this.state.Message}</div>
                {/*<button onClick = {this.clickHandler.bind(this)}>click</button>
                <button onClick = {() => this.clickHandler}>click</button>*/}
                <button onClick = {this.clickHandler}>click</button>

            </div>
        )
    }   

}
export default Eventbind;