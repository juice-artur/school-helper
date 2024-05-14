import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/user/userSlice'
import schoolSlice from './reducers/school/schoolSlice'
import teacherSlice from './reducers/teacher/teacherSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    school: schoolSlice,
    teachers: teacherSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch