import { useSelector, useDispatch } from "react-redux";
import ProductsList from "../../redux/productsList";

function HomeScreen() {
  // const users = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Screen</h1>
      <ProductsList />
    </div>
  );
}

export default HomeScreen;
