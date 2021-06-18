import React from 'react';

const PropsEx = props => {
    console.log(props);
    // props.name = 'Hello'; this statement will give error, as props are immutable in nature
    return (<div>
        <h1> Props {props.name} a.k.a (also known as) {props.heroName}</h1>
        { props.children}
    </div>);
}

export default PropsEx;