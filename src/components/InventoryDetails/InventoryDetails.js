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

        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventory]);
    // decrease quantity
    const decreaseQuantity = () => {
        const oldQuantity = parseInt(inventory.quantity);
        const quantity = oldQuantity - 1;

        const updateQuantity = { quantity };
        console.log(updateQuantity);
        // send data to the server
        const url = `http://localhost:5000/items/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
            // body: (updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('update quantity successfully!!');
            })


    };








    // const decreaseQuantity = () => {



    //     if (updatequantity === 0) {
    //         setUpdatequantity(0);
    //         console.log(updatequantity);
    //     }
    //     else {
    //         setUpdatequantity(updatequantity - 1);
    //         console.log(updatequantity);
    //     }



    // }




    // setQuantity(no);
    // console.log(quantity);
    // if (quantity === 0) {
    //     setQuantity(0);
    //     // console.log(quantity);
    // }
    // else {
    //     setQuantity(quantity - 1);
    //     // console.log(quantity);
    // }






    return (
        <div className=''>
            <h2 className='mt-2 text-white text-4xl text-center'>
                Update Your Inventory :
            </h2>

            <div className="mt-10 mb-10  mx-auto flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-green-400 dark:border-gray-700 dark:bg-rose-700 dark:hover:bg-green-700">
                <img className="object-cover w-50 h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={inventory.image} alt=""></img>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{inventory.name}</h5>
                    <p className="mb-3 font-normal text-slate-100 dark:text-slate-100">{inventory.description}</p>
                    <p className="mb-3 font-normal text-slate-100 dark:text-slate-100">Price: {inventory.price}</p>
                    <p className="mb-3 font-normal text-slate-100 dark:text-slate-100">Quantity: {inventory.quantity}</p>
                    <p className="mb-3 font-normal text-slate-100 dark:text-slate-100">Supplier Name: {inventory.supplier_name}</p>
                    <button onClick={() => decreaseQuantity()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Delivered
                    </button>
                </div>
            </div>

        </div>
    );
};

export default InventoryDetails;