import { createSlice } from '@reduxjs/toolkit';

const CarouselDtlsSlice = createSlice({
  name: 'carouselDtlsSliceData',
  initialState: { carouselDtlsSliceData: [] },
  reducers: {
    carouselDtlsReducer: (state, action) => {
      state = action.payload;
    },
  },
});

export const { carouselDtlsReducer } = CarouselDtlsSlice.actions;
export default CarouselDtlsSlice.reducer;
