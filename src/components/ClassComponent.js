import React, {Component} from 'react';

class ClassComponent extends Component{
    render(){
        return (
        <div>
            <h1>Hello Class Component</h1>
            <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
        </div>
        )
    }
}

export default ClassComponent;  //class component tutorial