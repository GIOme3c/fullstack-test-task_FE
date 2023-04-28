import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {...action.payload, multipler:1}
      state[newItem.product_id] = newItem
    },
    removeItem: (state, action) => {
      delete state[action.payload]
    },
    setItem: (state, action) => {
      const changes = action.payload
      state[changes.id][changes.key] = changes.value
    },
    setCount: (state, action) => {
      const changes = action.payload
      state[changes.id].multipler = changes.multipler
    }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions