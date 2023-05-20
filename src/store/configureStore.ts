import { configureStore } from "@reduxjs/toolkit";
import userStateSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    userState: userStateSlice.reducer,
  },
});

export default store;
