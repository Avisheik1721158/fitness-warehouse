import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-28 text-5xl text-center'>
                    Our Inventory
                </h2>
                <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-2'>
                    {
                        items.map(item => <Item key={item._id} item={item} ></Item>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Items;