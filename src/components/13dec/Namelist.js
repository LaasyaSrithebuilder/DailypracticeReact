import React, {Component} from 'react'
import Person from './Person'

function Namelist() {
   const names = ["laasya", 'VANI', "VIDYA" ]
const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
] 
  const personList = persons.map(person => < Person key={person.id} person={person} />)
//    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
//    return <div>{nameList}</div>

//const personList = persons.map(person => <Person key ={person.id} person={person} />
//)
   // return <div>{personList} </div>;


// without key value gives warning in console
//         const personList = persons.map( person => <Person person = {person} /> );
//     }
//   return <div>{personList} </div>;

   
    // return (
    //     <div>
    //         {names.map( name => <h1>{name}</h1> )
    //         }
    //     </div>
    // )

    //  by using map function using arrow function
    // const nameList = names.map( name => <h1>name</h1> )
    // return <div>{nameList} </div>;
    //by adress

    // return (
    //     <div><h2>{names[0]} </h2>
    //     <h2>{names[1]} </h2>
    //     <h2>{names[2]} </h2>
    //     </div>
    // )


}
export default Namelist;