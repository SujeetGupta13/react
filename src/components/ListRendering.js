import React from 'react';
import Person from './Person';

function ListRendering(props) {
    const names = ['a', 'b', 'c','a' ];
    const nameList = names.map( name => <h2>{name}</h2>);

    const persons = [
        {"id":1,"name":'a', "age":20, "skill":'react'},
        {"id":2,"name":'b', "age":21, "skill":'angular'},
        {"id":3,"name":'c', "age":22, "skill":'vue'}
     ];
    // const personList = persons.map( person => <h2>I am {person.name} and my age is {person.age} and know {person.skill}</h2>);
    // const personList = persons.map( person => <Person person={person}/>)
     // const personList = persons.map( person => <Person key={person.id} person={person}/>) 
     const namesIndex = names.map( (name, index) =>   <h1 key ={index}>{index} {name}</h1>)
     //using key as props has av dangerous effect. recall what has been explained in the tutorial
    //key props are not accesible in child component. it helps react to idantify in any change in the list so that it can render only changed part
    //return <div>{personList}</div>
     return <div>{namesIndex}</div>
    // return (
    //     <div>
    //         {/* {
    //             names.map( name => <h2>{name}</h2> )
    //         } */}

    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2> */}
    //     </div>
    // );
}

export default ListRendering;