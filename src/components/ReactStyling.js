import React from 'react';
import './myStyle.css';
import './appStyles.css';
import styles from './appStyles.module.css'

const inlineStyling = {
    fontSize: '72px',
    color:'blue'
}
function ReactStyling(props) {
    let classname = props.primary ? 'primary' : '';
    return (
        <div>
            {/* example of css stylesheet */}
            <h2 className={`${classname} font-xl`}>Hello CSS Stylesheet</h2> 
            {/* Exmaple of Inline Styling */}
            <h2 style={inlineStyling}>Hello Inline Styling</h2> 
            {/* Example of CSS module */}
            <h2 className='error'>Hello using simple Styling</h2>
            <h2 className={styles.success}>Hello using CSS module Styling</h2>
        </div>
    );
}

export default ReactStyling;