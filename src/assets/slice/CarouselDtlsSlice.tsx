import { createSlice } from '@reduxjs/toolkit';

import { useGetCarouselByNameQuery } from './CarouselSlice';

const { data } = useGetCarouselByNameQuery('');

const CarouselDtlsSlice = createSlice({
  name: 'carouselDtlsData',
  initialState: {
    carouselDtlsData: [],
  },
  reducers: {
    carouselDtlsFiltered: (state, action) => {
      const filteredData = data.filter((item: any) => {
        return item.id == action.payload;
      });
      state.carouselDtlsData = filteredData;
    },
  },
});

export const { carouselDtlsFiltered } = CarouselDtlsSlice.actions;
export default CarouselDtlsSlice.reducer;
