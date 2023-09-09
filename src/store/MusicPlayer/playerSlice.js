import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTrack: null,
  isPlaying: false,
  volume: 50,
  playerOpen: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playTrack(state, action) {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    pauseTrack(state) {
      state.isPlaying = false;
    },
    setVolume(state, action) {
      state.volume = action.payload;
    },
    openPlayer(state) {
      state.playerOpen = true;
    },
    closePlayer(state) {
      state.playerOpen = false;
    },
  },
});

export const {
  playTrack,
  pauseTrack,
  setVolume,
  openPlayer,
  closePlayer,
} = playerSlice.actions;

export default playerSlice.reducer;
