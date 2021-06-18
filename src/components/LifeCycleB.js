import React, { Component } from 'react';

class LifeCycleB extends Component {

    constructor(props) {
        super(props);
          this.state ={name:'Sujeet'}
          console.log('LifeCycleB constructor');
    }
    
    static getDerivedStateFromProps(state, props){
        console.log('LifeCycleB getDerivedStateFromProps');
        return null;
        // rarely used during mouting or upadte
        //inside this method we cant use this keyword as it is static method. hence setState method is also not accesible hence new State object can be retrund.
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount');// this method called once
    }
    
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')// rarely used during upadte
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleB getSnapshotBeforeUpdate')// rarely used during upadte
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')// this method called once
    }

    render() {        
        console.log('LifeCycleB Render')
        return (
            <div>LifeCycle B  </div>
        );
    }
}

export default LifeCycleB;