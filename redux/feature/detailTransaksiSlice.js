import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const selectedItemSlice = createSlice({
  name: 'detailTranksasi',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.data = action.payload;
    },
    clearSelectedItem: (state) => {
      state.data = null;
    },
  },
});

export const { setSelectedItem, clearSelectedItem } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;
