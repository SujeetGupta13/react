import React from 'react';

function Person({person, key}) {
    return (
        <div>
          {key}  <h2>I am {person.name} and my age is {person.age} and know {person.skill}</h2>
        </div>
    );
}

export default Person;