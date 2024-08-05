import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    nama: "",
    email: "",
    alamat: "",
    status: "",
    tagihan: 0,
    NIS: "",
    no_hp: 0,
    no_hp_ortu: 0,
    is_active: true,
    golongan: "",
    urlLogo: "",
    sekolah:"",
    created_at: "",
    updated_at: "",

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
