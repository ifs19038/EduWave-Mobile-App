import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feature/userSlice';
import transaksiReducer from './feature/riwayatSlice';
import detailTransaksiReducer from './feature/detailTransaksiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    transaksi: transaksiReducer,
    detailTransaksi: detailTransaksiReducer,

  },
});
