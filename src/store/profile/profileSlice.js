import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from './profileActions';

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload.data;
    })
  }
})

export default ProfileSlice.reducer;