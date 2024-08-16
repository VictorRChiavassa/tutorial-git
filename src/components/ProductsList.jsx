import { Trash2 } from "lucide-react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/apiSlice";

function ProductsList() {
  const { data: products, isError, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) {
    return <>loading..</>;
  }

  if (isError) {
    return <>error: {error}</>;
  }

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirm) {
      deleteProduct(id);
    }
  };

  return (
    <div className="flex flex-col gap-5 p-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <ul className="flex flex-col justify-center items-center gap-5">
        {products?.map((product) => (
          <li
            key={product.id}
            className="flex flex-col items-start border p-5 rounded-md min-w-60"
          >
            <div className="flex justify-between w-full items-center">
              <p className="font-semibold text-md">{product.name}</p>
              <button
                className="rounded-full border w-8 h-8 flex justify-center items-center bg-black text-white"
                onClick={() => {
                  handleDelete(product.id);
                }}
              >
                <Trash2 size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-300">$ {product.price}</p>
            <div className="flex justify-between w-full items-center">
              <p className="text-sm text-gray-300">internacional</p>
              <div className="w-10 h-10 flex justify-center items-center">
                <input
                  type="checkbox"
                  checked={product.international}
                  readOnly
                  className="w-4 h-4"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
