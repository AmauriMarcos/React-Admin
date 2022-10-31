import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const getAllUsers = createAsyncThunk("properties/getAllUsers", async () => {

  try{
      const res = await axios.get(`http://ec2-54-167-89-197.compute-1.amazonaws.com:8000/api/users`);
      return res.data
    }catch(error){
      console.log(error.response);
    }
});


export const getUserByID = createAsyncThunk("users/getUserByID", async (id, { rejectWithValue }) => {

  try{
    const res = await axios.get(`http://ec2-54-167-89-197.compute-1.amazonaws.com/api/users/view/${id}`);
    return res.data;
    
  }catch(err){
    console.log(err.response.data)
    return rejectWithValue(err.response.data)
  }
  
});


export const deleteUser = createAsyncThunk("users/deleteUser", async (id, { rejectWithValue }) => {

  try{
    const res = await axios.delete(`http://ec2-54-167-89-197.compute-1.amazonaws.com/api/users/${id}`);
    return res.data;
    
  }catch(err){
    console.log(err.response);
    return rejectWithValue(err.response.data);
  }
  
});


const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state) => {
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
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = state.users.filter((user) => {
          return user.id !== payload
        });
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      })
  },
});

export default usersSlice.reducer;
