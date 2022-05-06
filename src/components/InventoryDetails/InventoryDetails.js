import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useInventoryDetails from '../useInventoryDetails/useInventoryDetails';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    // useInventoryDetails
    // const [inventory] = useInventoryDetails(inventoryId);
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/items/${inventoryId}`;

        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    return (
        <div className=''>
            <h2 className='text-white text-center'>
                Welcome to details :
            </h2>
            <div className=" mt-5 mx-12 sm:grid-cols-1 sm:mx-10   lg:grid-col-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700">

                <img className="rounded-t-lg " src={inventory.image} alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{inventory.name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{inventory.description?.length === 212 ? inventory.description : inventory.description?.slice(0, 212)}</p>
                    <p className="mb-3 font-bold text-red-700 dark:text-red-400">  <span className='text-slate-100'>Price :  </span> {inventory.price}</p>
                    <p className="mb-3 font-bold text-green-700 dark:text-green-400"><span className='text-slate-100'>Quantity  : </span> {inventory.quantity}</p>
                    <p className="mb-3 font-bold text-pink-700 dark:text-pink-400"><span className='text-slate-100'>Supplier Name  : </span> {inventory.supplier_name}</p>
                    <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Delivered

                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;