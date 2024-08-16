import React from "react";
import ProductsList from "../../components/ProductsList";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../redux/apiSlice";
import { v4 } from "uuid";

function ProductsScreen() {
  const [createProduct] = useCreateProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const price = e.target.elements.price.value.trim();
    const international = e.target.elements.internacional.checked;
    createProduct({
      id: v4(),
      name,
      price,
      international,
    });
  };

  return (
    <div className="flex flex-1 justify-center gap-20 mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-center p-4"
      >
        <h1 className="text-2xl font-bold">Form</h1>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="border px-4 rounded-md h-10"
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          className="border px-4 rounded-md h-10"
        />
        <div className="flex gap-5">
          <label htmlFor="internacional">Internacional</label>
          <input type="checkbox" name="internacional" />
        </div>

        <button className="border p-2 w-20 rounded-md bg-blue-400 text-white">
          Submit
        </button>
      </form>
      <ProductsList />
    </div>
  );
}

export default ProductsScreen;
