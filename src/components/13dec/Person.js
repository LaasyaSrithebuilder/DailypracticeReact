import React from "react"

function Person ({person, key}) {
    return (
        <div><h2 key={person.id}>I am {person.name}. I am {person.age} years old. I know {person.skill} </h2>   
        </div>
    )
}
export default Person;
//no output bcoz key is used as prop but key is reserved word in react so it wont be passed to component