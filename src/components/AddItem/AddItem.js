import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application-json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='w-1/2 mx-auto bg-rose-500'>
            <h2 className='mt-5 mb-5 text-2xl text-white text-center '>
                Add Inventory Item
            </h2>
            <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
                <input className="border border-sky-500 mb-2" placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className="border border-sky-500 mb-2" placeholder='Photo URL' type="text" {...register("image",)} />
                <textarea className="border border-sky-500 mb-2" placeholder='Description'{...register("description",)} />
                <input className="border border-sky-500 mb-2" placeholder='Price' type="text" {...register("price",)} />
                {/* <input className="border border-sky-500 mb-2" placeholder='Quantity' type="number" {...register("quantity",)} /> */}
                <input className="border border-sky-500 mb-2" placeholder='Supplier Name'  {...register("supplier_name", { required: true, maxLength: 20 })} />



                <input className='text-slate-100' type="submit" value="Add Item" />

            </form>
        </div>
    );
};

export default AddItem;