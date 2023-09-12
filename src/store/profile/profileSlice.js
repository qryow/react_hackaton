import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from './profileActions';

const ProfileSlice = createSlice({
  name: 'profiles',
  initialState: {
    profiles: [],
    activeProfile: null
  },
  reducers: {
    setActiveProfile: (state, action) => {
      state.activeProfile = action.payload;
    },
  },    
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profiles = action.payload.data;
      })
  },
});


export const { setActiveProfile, togglePrimeStatus } = ProfileSlice.actions;
export default ProfileSlice.reducer;
