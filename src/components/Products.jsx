import React, { useEffect, useState } from "react";
// import data from "../assets/images/products.json";
import ProductSection from "./ProductSection";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://seclob-server.onrender.com/api/categories"
    );
    console.log(res);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full ">
      <div className="w-full flex items-center justify-center h-[200px] bg-[#2C65DA] text-white font-bold text-3xl ">
        Products
      </div>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 bg-blue-500 animate-spin"></div>
        </div>
      )}
      <div>
        {data?.map((category, i) => {
          return <ProductSection key={i} productSection={category} />;
        })}
      </div>
    </div>
  );
};

export default Products;
