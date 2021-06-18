import React, { Component, PureComponent } from 'react';
import MemoCompo from './MemoCompo';
import PureCompo from './PureCompo';
import RegularCompo from './RegularCompo';

class ParentCompo extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state ={name:'Sujeet'}
    }
    componentDidMount(){
        setInterval( () =>
        this.setState( {
            name:'Sujeet'
        }), 2000)
    }
    render() {
        console.log('************Parent Component***********')
        return (
            <div>
                Parent Component
                <PureCompo name={this.state.name}/>
                <RegularCompo name={this.state.name} />
                <MemoCompo name={this.state.name}/>
            </div>
        );
    }
}

export default ParentCompo;