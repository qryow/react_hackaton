import { configureStore } from "@reduxjs/toolkit";
import userSlice from './account/userSlice';
import musicSlice from "./musics/musicSlice";

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    user: userSlice,
    musics: musicSlice
  }
})