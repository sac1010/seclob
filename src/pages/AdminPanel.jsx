import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="w-full flex justify-around mt-10 flex-col items-center gap-10">
      <Link
        to={"/admin/add-product"}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg w-fit "
      >
        add product
      </Link>
      <Link
        to={"/admin/add-category"}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        add category
      </Link>
      <Link
        to={"/admin/remove-category"}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        View Products
      </Link>

      <Link
        to={"/admin/remove-product"}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Remove Product
      </Link>
      <Link
        to={"/admin/remove-category"}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        remove category
      </Link>
    </div>
  );
};

export default AdminPanel;
