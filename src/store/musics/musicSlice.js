import { createSlice } from "@reduxjs/toolkit";
import { getMusics } from "./musicActions";

const musicsSlice = createSlice({
  name: 'musics',
  initialState: {
    loading: false,
    oneMusic: null,
    musics: [],
    search: ''
  },
  reducers: {
    clearOneMusicState: (state) => {
      state.oneMusic = null;
  },
    changeSearchVal: (state, action) => {
      state.search = action.payload.search;
  }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getMusics.pending, (state) => {
      state.loading = true;
    })
    .addCase(getMusics.fulfilled, (state, action) => {
      state.loading = false;
      state.musics = action.payload.data;
    })
    .addCase(getMusics.rejected, (state) => {
      state.loading = false;
    })
  }
})

export const { clearOneMusicState, changeSearchVal } = musicsSlice.actions;
export default musicsSlice.reducer;