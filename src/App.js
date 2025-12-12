// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';

class App extends Component {
render ()  {
 return (
    <div className="App">
      <Greet name = "Laasya" heroName = "sri"> 
      < p>This is children props</p>
      </Greet>
      
      <Greet name = "Sri" >
        <button>Action</button>
        </Greet> 
      <Greet name = "namaste"/> 
     <Welcome name = "hii" heroName = "hello"/> 
      
     {     /* < Hello />*/}
    </div>
  );
}
}

export default App;
