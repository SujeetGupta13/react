import React, { Component } from 'react';

class RegularCompo extends Component {
    render() {
        console.log('Regular Component***********')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        );
    }
}

export default RegularCompo;