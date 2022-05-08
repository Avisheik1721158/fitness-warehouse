import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://secure-retreat-48774.herokuapp.com/items/${inventoryId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventory]);
    // decrease quantity
    const decreaseQuantity = () => {
        const oldQuantity = parseInt(inventory.quantity);
        let quantity = oldQuantity - 1;
        if (quantity < 0) {
            quantity = 0;
        }
        let updateQuantity = { quantity };


        console.log(updateQuantity);
        // send data to the server
        const url = `https://secure-retreat-48774.herokuapp.com/items/${inventoryId}`;
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
        setIsLoading(true);
    };

    const increaseQuantity = (event) => {
        event.preventDefault();
        const addQuantity = event.target.add.value;
        console.log(addQuantity);
        const oldQuantity = parseInt(inventory.quantity);
        const quantity = oldQuantity + parseInt(addQuantity);
        const updateQuantity = { quantity };
        console.log(updateQuantity);
        // send data to the server
        const url = `https://secure-retreat-48774.herokuapp.com/items/${inventoryId}`;
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
        event.target.reset();
        setIsLoading(true);

    };

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

            <form onSubmit={increaseQuantity} className="w-full max-w-sm mx-auto mb-5">
                <div className="flex items-center border-b border-teal-500 py-2">
                    {/* <input className="appearance-none bg-transparent border-none w-full text-slate-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name='add' placeholder="Add number of your item" /> */}
                    <input className="appearance-none bg-transparent border-none w-full text-slate-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type=" number" name="add" placeholder='Add the number of your item' required />
                    {/* <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Restock item
                    </button> */}
                    <input className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" value="Restock item" />

                </div>
            </form>
        </div>
    );
};

export default InventoryDetails;