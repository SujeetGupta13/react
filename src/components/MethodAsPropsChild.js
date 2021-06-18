import React from 'react';

function MethodAsPropsChild(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> this is to call parent method */}

            <button onClick={() =>props.greetHandler('Child')}>Greet Parent</button>
        </div>
    );
}

export default MethodAsPropsChild;