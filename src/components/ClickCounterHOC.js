import React, { Component } from 'react';
import withHocCounter from './WithHocCounter';

class ClickCounterHOC extends Component {
    // constructor(props) {
    //     super(props);
    //      this.state ={
    //          count:0
    //      }
    // }
    // incrementCount = () =>{
    //     this.setState( prevState =>{
    //         return {count: prevState.count+1}
    //     }
    //    )
    // }
    render() {
        //const {count} = this.state
        const {count, incrementCount} = this.props
        return (
            // <div>
            //     <button onClick={this.incrementCount}>{this.props.name} Clicked {count} times</button>
            // </div>
            <div>
                <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
            </div>
        );
    }
}

export default withHocCounter(ClickCounterHOC,10);