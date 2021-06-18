import React, {Component} from 'react';

class DestructuringPropsClass extends Component{
    render(){
        const {name, heroName} = this.props;
        //const {name, heroName} = this.state; way to destruct state object
        return (
        <div>
            <h1>Hello Class Component</h1>
            <h1>Destructing Props in Class component {name} a.k.a {heroName}</h1>
        </div>
        )
    }
}

export default DestructuringPropsClass;