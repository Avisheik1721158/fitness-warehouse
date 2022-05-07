import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../hook/useItems';

import ManageItems from '../ManageItems/ManageItems';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [items] = useItems();
    const addItem = () => {
        navigate('/addItem')

    }
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-5 mb-4  text-5xl text-white text-center'>
                    Our Inventory
                </h2>
                <button onClick={() => addItem()} type="button" className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add a new Item</button>
                <div className=''>
                    {
                        items.map(item => <ManageItems key={item._id} item={item} ></ManageItems>)
                    }


                </div>





            </div>


        </div>

    );
};

export default ManageInventories;