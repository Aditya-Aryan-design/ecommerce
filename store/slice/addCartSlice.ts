import { createSlice } from '@reduxjs/toolkit'

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  }

interface addProductState {
  value: Product[]
}


const initialState: addProductState = {
  value: [],
}

export const addProductSlice = createSlice({
  name: 'addProduct',

  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload)
    },

    removeProduct: (state, action)=>{
      for(let i=0; i < state.value.length; i++){
        if(state.value[i].id === action.payload){
          state.value[i] = state.value[i+1]
        }
      }
      state.value.length-=1
    }

  },
})

export const { addProduct,removeProduct } = addProductSlice.actions



export default addProductSlice.reducer