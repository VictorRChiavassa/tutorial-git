import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readProducts, createProduct } from "./productSlice";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        const result = res.json();
        return result;
      })
      .then((data) => {
        dispatch(readProducts(data));
      });
  }, [dispatch]);

  return (
    <div>
      <h2>crud de productos</h2>
      <h3>lista de productos</h3>
      <ul>
        <li>...productos</li>
      </ul>
      <aside>
        <input type="text" placeholder="nombre del producto" />
        <button
          onClick={() => {
            fetch("http://localhost:3000/products", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: 4,
                name: "Product 4",
                price: 400,
              }),
            })
              .then((res) => {
                const result = res.json();
                return result;
              })
              .then((data) => {
                dispatch(readProducts(data));
              });
          }}
        >
          Add Product
        </button>
      </aside>
    </div>
  );
};

export default ProductsList;
