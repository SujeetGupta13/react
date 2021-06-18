import React, { Component } from 'react';

class EventBinding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message:'Hello event Binder'
        }

        //this.clickHandler = this.clickHandler.bind(this) //third aproach
    }

    // clickHandler(){
    //     console.log(this)
    //     this.setState({message:'Good Bye Event Handler'})
    // } // this was part of 1 2 and 3rd approach
    
    clickHandler = () =>{
        this.setState({message:'Good Bye event handler 4th appoarch'})
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler}>Event Bindng Click</button>  this will give error as this keyword has not been binded to eevent handler */}
                {/* <button onClick={this.clickHandler.bind(this)}>Event Bindng Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Event Bindng Click</button> */}
                {/* Above 2 binding approach will generate brand new event hnadler after every update on state 
                becasue when state will change component will be rerendered */}

                <button onClick={this.clickHandler}>Event Bindng Click</button> 
            </div>
        );
    }
}

export default EventBinding;