import { configureStore } from "@reduxjs/toolkit";
import pricesReducer from "./features/prices/pricesSlice";

export default configureStore({
  reducer: { prices:pricesReducer },
});
