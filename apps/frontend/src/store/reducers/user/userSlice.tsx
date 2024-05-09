import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '../../../TypesAndInterfaces'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {
    setCurrentUser: (state, action:PayloadAction<User| null>)  => {
      console.log(action)
      state.data = action.payload
    },
  }
})

export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer