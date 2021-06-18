import React from 'react';

// Destructing is ES6 feature
//1st way
// const DestructuringProps = ({name, heroName}) => {
//     return (<div>
//         <h1> Destructuring Props 1st way {name}  {heroName}</h1>
//         </div>);
// }

//2nd way

const DestructuringProps = props => {
    const {name, heroName} = props;
    return (<div>
        <h1> Destructuring Props 2nd way {name}  {heroName}</h1>
        </div>);
}
export default DestructuringProps;