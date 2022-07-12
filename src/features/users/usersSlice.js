import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

export const getUserByID = createAsyncThunk("users/getUserByID", async (id) => {
  const res = await axios(`https://jsonplaceholder.typicode.com/users?id=${id}`)
  return res.data;
});

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      })
      .addCase(getUserByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByID.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
        state.error = null;
      })
      .addCase(getUserByID.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });

  },
});

export const selectAllUsers = (state) => state.users.users;
export default usersSlice.reducer;
