import React from "react";
import data from "../assets/images/products.json";
import ProductSection from "./ProductSection";

const Products = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex items-center justify-center h-[200px] bg-[#2C65DA] text-white font-bold text-3xl ">
        Products
      </div>
      <div>
        {data.map((category,i) => {
          return <ProductSection key={i} productSection={category}/>;
        })}
      </div>
    </div>
  );
};

export default Products;
