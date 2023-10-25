import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/photos');
    const data = await res.data;
    return data;
  }
);

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
