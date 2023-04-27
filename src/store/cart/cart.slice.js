import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.product_id === action.payload)
        },
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions