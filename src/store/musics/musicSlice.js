import { createSlice } from "@reduxjs/toolkit";
import { getMusics } from "./musicActions";

const musicsSlice = createSlice({
  name: 'musics',
  initialState: {
    loading: false,
    musics: [],
    search: '',
    selectedSong: null,
    currentJanre: '',
    selectedGenre: '',
    selectedSongs: [],
  },
  reducers: {
    changeSearchVal: (state, action) => {
      state.search = action.payload.search;
      console.log(action.payload.search);
    },
    setSelectedSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    changeJanre: (state, action) => {
      state.currentJanre = action.payload.janre;
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
      console.log(action.payload);
    },
    setSelectedSongs: (state, action) => {
      state.selectedSongs = action.payload;
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


export const { changeSearchVal, setSelectedSong, changeJanre, setSelectedGenre, setSelectedSongs, } = musicsSlice.actions;

export default musicsSlice.reducer;