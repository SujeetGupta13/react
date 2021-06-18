import React from 'react';

const RefForwardingInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    );
}) 

export default RefForwardingInput;