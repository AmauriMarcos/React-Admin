import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  user: {},
  isAdmin: 0,
  loading: false,
  error: null,
};


//USER REGISTER
export const register = createAsyncThunk("auth/register", async (data) => {

  try {
    const response = await axios.post("http://localhost:8000/api/auth/register", data, { withCredentials: true} );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});

//USER LOGIN
export const login = createAsyncThunk("auth/login", async(data, { rejectWithValue }) => {
  
  const config = {
    headers: {
      "Content-Type": "application/json"
      },
      withCredentials: true
    }

  try{
    const res = await axios.post(`http://localhost:8000/api/auth/login`, data, config);
    return res.data;

  }catch(err){
    console.log(err.response.data)
    return rejectWithValue(err.response.data)
  }
});

//GET AUTHENTICATED USER
export const getUser = createAsyncThunk("auth/getUser", async (id) => {
  console.log(id)
  const config = {
    headers: {
      "Content-Type": "application/json"
      },
      withCredentials: true
    }
 
    try {
      const response = await axios.get(`http://localhost:8000/api/users/${id}`, config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state){
      state.entities = [];
      state.user = {};
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [register.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.entities = payload;
      state.isAdmin = payload.isAdmin
    },
    [login.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    },
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.user = payload;   
    },
    [getUser.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    },
  },
});

export const{logout} = authSlice.actions;
export default authSlice.reducer;
