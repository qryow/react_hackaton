import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    status: ''
  },
  reducers: {},
  extraReducers: {}
})

export default userSlice.reducer;