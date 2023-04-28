import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: "products",
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setPage: (state, action) => {
        state.currentPage = action.payload
    },
  }
})

export const stateReducer = stateSlice.reducer
export const stateActions = stateSlice.actions