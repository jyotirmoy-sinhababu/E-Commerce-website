import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState: { user: [] },
  reducers: {
    userData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userData } = UserSlice.actions;
export default UserSlice.reducer;
