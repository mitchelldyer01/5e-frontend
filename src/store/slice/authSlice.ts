import { createSlice} from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AuthState {
  value: string
}

const initialState: AuthState = {
  value: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    
    unset: (state) => {
      state.value = '';
    }
  }
});

export const { set, unset } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth.value;

export default authSlice.reducer;