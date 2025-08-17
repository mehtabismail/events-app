import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSliceProps } from './types';

const initialState = {
  token: null,
  user_data: {},
  role: '',
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.user_data = action.payload;
    },
    setingRole: (state, action) => {
      state.role = action.payload;
    },
    logout: () => ({ ...initialState }),
  },
});

export const { storeToken, setUserData, setingRole, logout } =
  authSlice.actions;

export default authSlice.reducer;
