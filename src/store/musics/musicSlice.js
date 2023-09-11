import { createSlice } from "@reduxjs/toolkit";
import { getMusics } from "./musicActions";

const musicsSlice = createSlice({
  name: 'musics',
  initialState: {
    loading: false,
    musics: [],
    search: '',
    selectedSong: null
  },
  reducers: {
    changeSearchVal: (state, action) => {
      state.search = action.payload.search;
    },
    setSelectedSong: (state, action) => {
      state.selectedSong = action.payload;
      //console.log(action.payload);
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

export const { changeSearchVal, setSelectedSong } = musicsSlice.actions;
export default musicsSlice.reducer;