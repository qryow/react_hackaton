import { createSlice } from "@reduxjs/toolkit";
import { getProfile, getOneProfile } from './profileActions';

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    profiles: [],
    oneProfile: null
  },
  reducers: {
    clearOneProfileState: (state) => {
      state.oneProfile = null;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProfile.fulfilled, (state, action) => {
      state.profiles = action.payload.data;
    })
    .addCase(getOneProfile.pending, (state) => {
      state.loading = true;
    })
    .addCase(getOneProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.oneProfile = action.payload.data;
      //console.log(action.payload.data);
    })
    .addCase(getOneProfile.rejected, (state) => {
      state.loading = false;
    })
  }
})

export const { clearOneProfileState } = ProfileSlice.actions;
export default ProfileSlice.reducer;