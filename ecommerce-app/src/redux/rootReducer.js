import { combineReducers } from "redux";
import productReducer from "./Products/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
