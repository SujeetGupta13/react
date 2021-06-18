import React, { Component } from 'react';

class ClickCounterRenderRefs extends Component {

    render() {
        //const {count} = this.state;
        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times using Render Refs</button>
            </div>
        );
    }
}

export default ClickCounterRenderRefs;