import React from 'react';

function MemoCompo(props) {
    console.log('Rendering Memo component')
    return (
        <div>
            
        </div>
    );
}

export default React.memo(MemoCompo);