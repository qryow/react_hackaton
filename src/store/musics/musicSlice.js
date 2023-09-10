import { createSlice } from "@reduxjs/toolkit";
import { getMusics } from "./musicActions";

const musicsSlice = createSlice({
  name: 'musics',
  initialState: {
    loading: false,
    musics: [],
    isPlaying: false,
    search: ''
  },
  reducers: {
    changeSearchVal: (state, action) => {
      state.search = action.payload.search;
    },
    playMusic: (state, action) => {
      state.isPlaying = true;
      state.currentMusic = action.payload;
    },
    pauseMusic: (state) => {
      state.isPlaying = false;
      state.currentMusic = null;
    },
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

export const { changeSearchVal, playMusic, pauseMusics } = musicsSlice.actions;
export default musicsSlice.reducer;