import React, { Component } from 'react';
import FocusInput from './FocusInput';

class ClassCompoRefDemo extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }
    clickHandler = () =>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <FocusInput ref={this.componentRef}/>
                <button onClick ={this.clickHandler}>ComponentRef</button>
            </div>
        );
    }
}

export default ClassCompoRefDemo;