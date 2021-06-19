import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    useEffect( () => {
        fetchItmes();
    }, []);

    const [items, setItems] = useState([]);;

    const fetchItmes = async () =>{
        const data = await fetch(
            'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
        );

        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    }
    return (
        <div>
            <h3>Shop Page</h3>
            {items.map( item => (
                <h1 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.name}</Link>
                    </h1>
            ))}
        </div>
    );
};

export default Shop;