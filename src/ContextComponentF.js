import React, { Component } from 'react';
import { UserConsumer, UserProvider } from './ContextUser';

class ContextComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) =>{ return <div> Hello {username}</div>}
                }
            </UserConsumer>
        );
    }
}

export default ContextComponentF;
