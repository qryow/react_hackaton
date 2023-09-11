import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from './profileActions';

const ProfileSlice = createSlice({
  name: 'profiles',
  initialState: {
    profiles: [],
    activeProfile: null,
    // primeStatus: false,
  },
  reducers: {
    setActiveProfile: (state, action) => {
      state.activeProfile = action.payload;
      console.log(action.payload);
    },
    // updatePrimeStatus: (state, action) => {
    //   if (state.activeProfile) {
    //     state.activeProfile.primeStatus = action.payload;
    //   }
    //   state.primeStatus = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profiles = action.payload.data;
      });
  },
});

export const { setActiveProfile, updatePrimeStatus } = ProfileSlice.actions;
export default ProfileSlice.reducer;
