import { createSlice } from '@reduxjs/toolkit'



interface userState {
  value: {
    id: string,
    name: string,
    email: string,
    seller: boolean
  }
}


const initialState: userState = {
  value: {
    id:'',
    name: '',
    email: '',
    seller: false
  },
}

export const userSlice = createSlice({
  name: 'User_Details',

  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.value = action.payload
    },

  },
})

export const { userDetails } = userSlice.actions



export default userSlice.reducer