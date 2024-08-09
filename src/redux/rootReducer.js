import { combineReducers } from "redux";
import productsReducer from "./productSlice";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
