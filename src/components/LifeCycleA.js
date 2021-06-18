import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
        super(props);
          this.state ={name:'Sujeet'}
          console.log('LifeCycleA constructor');
    }
    changeState = () => {
        this.setState({
            name:'rakesh'
        })
    }
    static getDerivedStateFromProps(state, props){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
        //inside this method we cant use this keyword as it is static method. hence setState method is also not accesible hence new State object can be retrund.
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount');// this method called once
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')// rarely used
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')// rarely used
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')// this method called once
    }
    render() {        
        console.log('LifeCycleA Render')
        return (
            <div>
            <LifeCycleB />
            <div>LifeCycle A  </div>
            <button onClick={this.changeState}>Change State</button>
            </div>
        );
    }
}

export default LifeCycleA;