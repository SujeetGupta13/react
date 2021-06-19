import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = () => {
    useEffect( () => {
        fetchItmes();
    }, []);

    const [items, setItems] = useState([]);;

    const fetchItmes = async () =>{
    }
    return (
        <div>
            <h3>Item Detail</h3>
        </div>
    );
};

export default ItemDetail;