import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.push(action.payload)
      const newItem = action.payload
      state[newItem.product_id] = newItem
    },
    removeItem: (state, action) => {
      // return state.filter((item) => item.product_id === action.payload)
      delete state[action.payload]
    },
    setItem: (state, action) => {
      const changes = action.payload
      // state.forEach((item) =>{
      //   if (changes.id === item.product_id) {
      //     item[changes.key] = changes.value
      //   }
      // })
      state[changes.id][changes.key] = changes.value
    }
  }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions