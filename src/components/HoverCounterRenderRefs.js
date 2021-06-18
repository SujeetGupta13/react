import React, { Component } from 'react';

class HoverCounterRenderRefs extends Component {
   
    render() {
        //const {count} = this.state;
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times using Render Refs</h2>
            </div>
        );
    }
}

export default HoverCounterRenderRefs;