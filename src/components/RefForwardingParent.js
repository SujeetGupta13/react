import React, { Component } from 'react';
import RefForwardingInput from './RefForwardingInput';

class RefForwardingParent extends Component {
    constructor(props) {
        super(props);
        
        this.refForwardParent =React.createRef();
    }
    refHandler =() =>{
        this.refForwardParent.current.focus();
    }
    render() {
        return (
            <div>
                <RefForwardingInput ref={this.refForwardParent}/>
                <button onClick={this.refHandler} >ParentRefForwarding</button>
            </div>
        );
    }
}

export default RefForwardingParent;