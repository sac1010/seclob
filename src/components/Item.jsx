import React from "react";

const Item = ({ name, image, color }) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 h-[400px] border-8 border-black rounded-2xl shadow-2xl">
      <img src={image} className="w-full h-[300px] p-4 rounded-3xl"></img>
      <div className="h-[80px] my-[10px] flex justify-between px-4">
        <div>
            <div className="font-semibold text-lg">
            {name}
            </div>
            <div className="font-medium text-gray-500" >
                500ml
            </div>
        </div>
        <div className="text-xl font-bold">100rs</div>
      </div>
    </div>
  );
};

export default Item;
