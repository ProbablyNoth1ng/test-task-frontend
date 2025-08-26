import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userLoginState {
  value: boolean
}

const initialState: userLoginState = {
  value: false,
}

export const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    login: (state,action: PayloadAction<boolean> ) => {
        state.value = action.payload    
    },
    logout: (state, action: PayloadAction<boolean>) => {
        state.value = action.payload
    },

  },
})

export const { login,logout } = userLoginSlice.actions

export default userLoginSlice.reducer