import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import productReducer from "./Products/productReducer";
import cartReducer from "./Cart/cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
