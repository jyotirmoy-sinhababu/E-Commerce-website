import { createSlice } from '@reduxjs/toolkit';

const UserOnlineSlice = createSlice({
  name: 'user',
  initialState: { user: {} },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = UserOnlineSlice.actions;
export default UserOnlineSlice.reducer;
