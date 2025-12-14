// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Greet from './components/Greet';
// import Msg from './components/Msg';
// import Counter from './components/13dec/Counter';
// import Greet1 from './components/13dec/Greet1';
// import welcom1 from './components/13dec/welcom1';
// import FunctionClick from './components/13dec/FunctionClick';
// import ClassClick from './components/13dec/ClassClick';
// import Eventbind from './components/13dec/Eventbind'; 
// import ParentComponent from './components/13dec/ParentComponent';
// import ChildComponent from './components/13dec/ChildComponent';
//import Usergreeting from './components/13dec/Usergreeting'; 
import Namelist from './components/13dec/Namelist';

class App extends Component {
render ()  {
 return (
    <div className="App">
     <Namelist />
      {/*<Usergreeting />
      /*<ParentComponent />
      <ChildComponent />
    {/*}  <Eventbind />
      {/*<classClick />
      {/*<FunctionClick /> 
      {/* <Greet name = "Laasya" heroName = "sri"> 
      < p>This is children props</p>
      </Greet>
      
      <Greet name = "Sri" >
        <button>Action</button>
        </Greet> 
      <Greet name = "namaste"/> 
     <Welcome name = "hii" heroName = "hello"/> 
      
     {     /* < Hello />*/
     /*<Msg />
      <Counter />
      <Greet1 name="Diana" heroName="wonderwoman"/>*/}
    
    </div>
  );
}
}

export default App;
