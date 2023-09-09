import { configureStore } from "@reduxjs/toolkit";
import userSlice from './account/userSlice';
import musicSlice from "./musics/musicSlice";
import profileSlice from "./profile/profileSlice"
import playerReducer from "./MusicPlayer/playerSlice";

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    user: userSlice,
    musics: musicSlice,
    profiles: profileSlice,
    player: playerReducer,
  }
})