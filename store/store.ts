import { configureStore } from '@reduxjs/toolkit'
import cartTotalReducer from './slice/counterSlice'
import addProductReducer from './slice/addCartSlice'
import userDetailsReducer from './slice/userDetailsSlice'

export const store = configureStore({
  reducer: {
    total: cartTotalReducer,
    product: addProductReducer,
    user: userDetailsReducer
},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch