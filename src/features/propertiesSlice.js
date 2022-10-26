import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  uniqueProperty: [],
  selectedProperty: [],
  loading: false,
  error: '',
};

//Create 
export const createProperty = createAsyncThunk("properties/createProperty", async (data) => {
  try {
    const response = await axios.post("http://localhost:8000/api/properties", data );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});

//Get 
export const getProperty= createAsyncThunk("properties/getProperty", async (id) => {
  console.log(id);
  try{
    const res = await axios.get(`http://localhost:8000/api/properties/${id}`);
    return res.data
  }catch(error){
    console.log(error.response);
  }
})

//Get Selected Property
export const getSelectedProperty = createAsyncThunk("users/getSelectedProperty", async (id, { rejectWithValue }) => {
  let newId = +id
  try{
    const res = await axios.get(`http://localhost:8000/api/properties/view/${newId}`);
    console.log(res.data);
    return res.data;
    
  }catch(err){
    console.log(err.response)
    return rejectWithValue(err.response.data)
  }
  
});

//Get all 
export const getAllProperties = createAsyncThunk("properties/getAllProperties", async () => {

  try{
      const res = await axios.get(`http://localhost:8000/api/properties/all`);
      return res.data
    }catch(error){
      console.log(error.response);
    }
});

//Delete Property
export const deleteProperty = createAsyncThunk("properties/deleteProperty", async (id) => {
  try{
    const res = await axios.delete(`http://localhost:8000/api/properties/${id}`);
    return res.data
  }catch(error){
    console.log(error.response);
  }
})

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers:  {
      //Create 
      [createProperty.pending]: (state) => {
          state.loading = true
      },
      [createProperty.fulfilled]: (state, {payload}) =>{
         state.loading = false
         console.log(payload);
      },
      [createProperty.rejected]: (state) => {
        state.loading = false;
        state.error = state.error.message;
      },
      //Get Selected Property 
      [getSelectedProperty.pending]: (state) => {
        state.loading = true
      },
      [getSelectedProperty.fulfilled]: (state, {payload}) =>{
       state.loading = false
       state.selectedProperty = payload;
      },
      [getSelectedProperty.rejected]: (state) => {
        state.loading = false;
        state.error = state.error.message;
      },
      //Get 
      [getProperty.pending]: (state) => {
        state.loading = true
      },
      [getProperty.fulfilled]: (state, {payload}) =>{
       state.loading = false
       state.uniqueProperty = payload;
      },
      [getProperty.rejected]: (state) => {
        state.loading = false;
        state.error = state.error.message;
      },
      //Get all 
      [getAllProperties.pending]: (state) => {
        state.loading = true
      },
      [getAllProperties.fulfilled]: (state, {payload}) =>{
       state.loading = false
       state.entities = payload;
      },
      [getAllProperties.rejected]: (state) => {
        state.loading = false;
        state.error = state.error.message;
      },

       //Delete property
      [deleteProperty.pending]: (state) => {
        state.loading = true
      },
      [deleteProperty.fulfilled]: (state, {payload}) =>{
       state.loading = false
       state.entities = payload;
      },
      [deleteProperty.rejected]: (state) => {
        state.loading = false;
        state.error = state.error.message;
      },

  }
});

export const { getPropertyById } = propertySlice.actions;
export default propertySlice.reducer;
