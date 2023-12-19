import React from "react";
import Item from "./Item";

const ProductSection = ({ productSection }) => {
  return (
    <div className="w-full ">
      <div className="w-full flex items-center justify-center">
        <div className="px-40 mt-32 mb-10 rounded-full py-2 bg-yellow-500 text-black font-semibold text-4xl ">{productSection.category}</div>
      </div>
      <div className="grid grid-cols-12 md:w-3/4 mx-auto w-full gap-8 px-2">
        {productSection.products.map((product, i) => {
          return <Item key={i} image={product.image} name={product.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductSection;
