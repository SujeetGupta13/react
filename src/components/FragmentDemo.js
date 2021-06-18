import React from 'react';
import Table from './Table';

function FragmentDemo(props) {
    return (
        <React.Fragment>
            <h1>Fragment Deom</h1>
            <p>This descrobes the fragment demo concept</p>
            <Table />
        </React.Fragment>
    );
}

export default FragmentDemo;