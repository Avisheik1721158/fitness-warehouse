import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, image, description, price, quantity, supplier_name } = item;
    const navigate = useNavigate();
    const navigateToInventoryDetails = id => {
        navigate(`items/${id}`);
    }
    return (
        <div className='mt-2 mx-5'>

            {/* <img classNameName='w-50' src={image} alt=""></img>
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <p><small>{price}</small></p>
            <p><small>{quantity}</small></p>
            <h2>{supplier_name}</h2>
            <button>Stock Update</button> */}
            {/*
               Rubber coated weight 
             */}


            <div className=" mt-5 mx-12 sm:grid-cols-1 sm:mx-10   lg:grid-col-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700">

                <img className="rounded-t-lg " src={image} alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.length === 212 ? description : description.slice(0, 212)}</p>
                    <p className="mb-3 font-bold text-red-700 dark:text-red-400">  <span className='text-slate-100'>Price :  </span> {price}</p>
                    <p className="mb-3 font-bold text-green-700 dark:text-green-400"><span className='text-slate-100'>Quantity  : </span> {quantity}</p>
                    <p className="mb-3 font-bold text-pink-700 dark:text-pink-400"><span className='text-slate-100'>Supplier Name  : </span> {supplier_name}</p>
                    <button onClick={() => navigateToInventoryDetails(_id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Stock Update

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;