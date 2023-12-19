import axios from "axios";
import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const getData = async () => {
    const data = await axios.get(
      "https://seclob-server.onrender.com/api/categories"
    );
    setData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const addItem = async () => {
    console.log(category, "cat");
    if (!name || !price || !quantity || !category) {
      alert("please fill required fields");
      return;
    }
    try {
      let res = await axios.post(
        `https://seclob-server.onrender.com/api/categories/${category}/products`,
        { name, image: imageUrl }
      );
      console.log(res.data);
      setCategory("");
      setImageUrl("");
      setName("");
      setPrice("");
      setQuantity("");
      alert("product added");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-8">
        <input
        value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border border-gray-600 rounded px-2"
          placeholder="product name"
          name=""
          id=""
        />
        <input
        value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          className="border border-gray-600 rounded px-2"
          placeholder="imageUrl"
          name=""
          id=""
        />

        <select
        value={category}
          onChange={(e) =>{
            console.log(e.target.value)
            setCategory(e.target.value)
          }
          }
          className="border border-gray-600 rounded px-2"
          name="category"
          id=""
        >
          <option value="">choose category</option>
          {data.map((el) => {
            return (
              <option key={el.id} value={el._id}>
                {el.category}
              </option>
            );
          })}
        </select>
        <input
        value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-600 rounded px-2"
          type="number"
          placeholder="Price"
          name=""
          id=""
        />
        <input
        value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border border-gray-600 rounded px-2"
          type="number"
          name=""
          id=""
          placeholder="quantity"
        />
        <button
          onClick={addItem}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
