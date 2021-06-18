import React from 'react';

// function Greet() {
//     return <h1>Hello Sujeet</h1>
// }

// ES6 Arrow function
//export const Greet = () => <h1>Hello ES6 function component </h1> //This is called Named export . and can be imported only this way
const Greet = () => <h1>Hello ES6 function component </h1>                                                              //import{ Greet } from './components/Greet';

export default Greet; // By this we make sure that Greet Component can be exporetd with any name in other component. It can exported like
                      //import MyComponent from './components/Greet'; or import Greet from './components/Greet';


//Functional Component example.Day1                      