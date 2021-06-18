import React, { Component } from 'react';
import ContextComponentC from './ContextComponentC';
import ContextComponentF from './ContextComponentF';
import ContextUser from './ContextUser';

class ContextComponentE extends Component {
    static contextType = ContextUser //2nd way of using the contextType
    render() {
        return (
            <div>
                Component E context {this.context}
                <ContextComponentF />
            </div>
        );
    }
}

// ContextComponentE.contextType = ContextUser //one way of using the contextType
export default ContextComponentE;<ContextComponentF />