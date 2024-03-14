import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user: string | null;
}

const loadUserFromLocalStorage = (): string | null => {
  const userJson = localStorage.getItem('user-info');
  return userJson ? JSON.parse(userJson) : null;
};

const initialState: AuthState = {
  user: loadUserFromLocalStorage(),
};

const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authentication: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { authentication, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
