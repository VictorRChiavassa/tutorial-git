import { useSelector, useDispatch } from "react-redux";
import ProductsList from "../../redux/productsList";

function HomeScreen() {
  // const users = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <div>
      <ProductsList />
    </div>
  );
}

export default HomeScreen;
