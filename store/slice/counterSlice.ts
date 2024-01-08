import { createSlice } from '@reduxjs/toolkit'



interface cartTotalState {
  value: number
}


const initialState: cartTotalState = {
  value: 0,
}

export const cartTotalSlice = createSlice({
  name: 'price_counter',

  initialState,
  reducers: {
    amountCounter: (state, action) => {
      state.value = state.value + action.payload
    },
    resetCounter: (state) => {
      state.value = 0
    },

  },
})

export const { amountCounter,resetCounter } = cartTotalSlice.actions



export default cartTotalSlice.reducer