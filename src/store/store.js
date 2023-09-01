import { configureStore } from "@reduxjs/toolkit";
import userSlice from './account/userSlice';

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    user: userSlice,
  }
})