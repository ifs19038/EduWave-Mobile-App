import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transaksi: [], // Array untuk menyimpan data riwayat transaksi
};

const transaksiSlice = createSlice({
  name: 'transaksi',
  initialState,
  reducers: {
    setTransaksi: (state, action) => {
      state.transaksi = action.payload;
    },
    clearTransaksi: (state) => {
      state.transaksi = [];
    },
  },
});

export const { setTransaksi, clearTransaksi } = transaksiSlice.actions;

export default transaksiSlice.reducer;
