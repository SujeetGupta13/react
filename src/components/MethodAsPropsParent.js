import React, { Component } from 'react';
import MethodAsPropsChild from './MethodAsPropsChild';

class MethodAsPropsParent extends Component {

    constructor(props) {
        super(props);
        
        this.state={
            parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName){
        //alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName} from ${childName}`) //ES6 feaure called template literals
    }
    render() {
        return (
            <div>
                <MethodAsPropsChild greetHandler={this.greetParent}/>
            </div>
        );
    }
}

export default MethodAsPropsParent;