import React from "react";

const AddItem = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const supplier_name = event.target.supplier_name.value;
    const info = { name, image, description, price, quantity, supplier_name };

    const url = `https://fitness-warehouse-server-1.onrender.com/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };
  return (
    <div className="w-1/2 mx-auto bg-rose-500">
      <h2 className="mt-5 mb-5 text-2xl text-white text-center ">
        Add Inventory Item
      </h2>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" required />
        <input type="text" name="image" placeholder="image" required />
        <input
          type="text"
          name="description"
          placeholder="description"
          required
        />
        <input type="text" name="price" placeholder="price" required />
        <input type="text" name="quantity" placeholder="quantity" required />
        <input
          type="text"
          name="supplier_name"
          placeholder="supplier_name"
          required
        />

        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
