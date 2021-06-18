import React from 'react';

function Colums(props) {
    const items =[]
    return (
        <React.Fragment>
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Sujeet</td>
            <>
             <td>Empty Fragamnent. </td>
             <td>Another way to represnt Fragments. but have limitation like we cant use key attribute</td>
            </>
        </React.Fragment>
     );
}

export default Colums;