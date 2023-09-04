import { createSlice } from "@reduxjs/toolkit";
import { getMusics } from "./musicActions";

const MusicsSlice = createSlice({
  name: 'musics',
  initialState: {
    loading: false,
    musics: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getMusics.pending, (state) => {
      state.loading = true;
    })
    .addCase(getMusics.fulfilled, (state, action) => {
      state.loading = false;
      state.musics = action.payload.res.data;
    })
    .addCase(getMusics.rejected, (state) => {
      state.loading = false;
    })
  }
})

export default MusicsSlice.reducer;