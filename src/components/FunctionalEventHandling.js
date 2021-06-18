import React from 'react';

function FunctionalEventHandling(props) {

    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default FunctionalEventHandling;

// <button onClick={clickHandler()}>Click</button> ;If we do like this then event handler will be funtion call not function.
// If we do like tis then at time of loading the app function will be called and on Click it wont work