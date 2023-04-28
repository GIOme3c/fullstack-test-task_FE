import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cart/cart.slice"
import { productsApi } from "./products/products.api"
import { stateReducer } from "./state/state.slice"

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer, 
    cart: cartReducer,
    state: stateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware)
})