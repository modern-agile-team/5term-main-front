import { createSlice } from "@reduxjs/toolkit";

const userStateSlice = createSlice({
  name: "userStateSlice",
  initialState: { state: false },
  reducers: {
    updateUserState: (user, action) => {
      user.state = action.payload;
    },
  },
});

export default userStateSlice;
export const { updateUserState } = userStateSlice.actions;
