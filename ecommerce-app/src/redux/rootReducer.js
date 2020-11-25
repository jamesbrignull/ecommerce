import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import productReducer from "./Products/productReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});

export default rootReducer;
