import React, { PureComponent } from 'react';

class PureCompo extends PureComponent {
    
    render() {
        console.log('Pure Component***********')
        return (
            <div>
                Pure component {this.props.name}
                {/* Pure component is applicable for class Component. Pure Component is rarely used.  Memo is used for functional component
                for the same beahviour*/}
            </div>
        );
    }
}

export default PureCompo;