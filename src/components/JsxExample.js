import React from 'react'

const JsxExample = () => {

    /* JSX */
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello With JSX</h1>
    //     </div>
    // )

    /* Without JSX*/
    // return(
    //     React.createElement('div', null, 'Hello Without JSX')
    // )

    return (
        React.createElement('div', {id:'hello', className:'dummyClass'}, React.createElement('h1', null, 'Hello Without JSX and with H1 tag'))
    )
}

export default JsxExample;