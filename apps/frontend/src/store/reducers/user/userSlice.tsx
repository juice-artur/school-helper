import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '../../../TypesAndInterfaces'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
  },
  reducers: {
    setCurrentUser: (state, action:PayloadAction<User>)  => {
      state.user = action.payload
    },
  }
})

export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer