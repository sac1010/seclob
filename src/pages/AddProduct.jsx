import React from "react";

const AddProduct = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8">
        <input type="text" className="border border-gray-600 rounded px-2" placeholder="product name" name="" id="" />
        <select className="border border-gray-600 rounded px-2" name="category" id="">
          <option value="">choose category</option>
        </select>
        <input className="border border-gray-600 rounded px-2" type="number" placeholder="Price" name="" id="" />
        <input className="border border-gray-600 rounded px-2" type="number" name="" id="" placeholder="quantity" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
