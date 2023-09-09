import { createSlice } from "@reduxjs/toolkit";
import { getProfile} from './profileActions';

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    profiles: []
  },
  reducers: {
    setRegistrationStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profiles = action.payload.data;
      });
  },
});

export const { setRegistrationStatus } = ProfileSlice.actions;
export default ProfileSlice.reducer;
