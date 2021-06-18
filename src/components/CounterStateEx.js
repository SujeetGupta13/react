import React, {Component} from 'react';

class CounterStateEx extends Component{

    constructor(){
        super();
        this.state= {
            count:0
        }
    }
    increment(){
        //this.state.count = this.state.count + 1; React won't re-render the component in the UI
        //Always make use of setState and never modift state directly.
        //Code has to be executed after the state has been updated? Place that code in the  call back function which 
        //is the 2nd argumnet to the setState method.
        this.setState({count:this.state.count+1}, () => console.log('callback value', this.state.count)) //callback
        console.log(this.state.count);
    }

    increment2(){
        //When you have to update state based on the previous state value, pass in a function as an argument instead 
        //of the regular object. here state name argument can be also used in the place of prevState.
        this.setState((prevState, props) => ({count:
            prevState.count+1}))
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    incrementFive2(){
        this.increment2()
        this.increment2()
        this.increment2()
        this.increment2()
        this.increment2()
    }
    render(){
        return (
        <div>
            <div>Count- {this.state.count}</div>
            <button onClick={ () => this.increment()}>increment</button>
            <button onClick={ () => this.incrementFive()}>incrementFive</button>
            <button onClick={ () => this.incrementFive2()}>incrementFive2</button>
        </div>
        )
    }
}

export default CounterStateEx;