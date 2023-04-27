import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cart/cart.slice"
import { productsApi } from "./products/products.api"

export const store = configureStore({
  reducer: {[productsApi.reducerPath]: productsApi.reducer, cart: cartReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware)
})