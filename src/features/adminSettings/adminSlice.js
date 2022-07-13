import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    darkTheme: false,
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        toggleTheme(state){
            state.darkTheme= !state.darkTheme
        },
        nightTheme(state){
            state.darkTheme = true;
        },
        lightTheme(state){
            state.darkTheme = false;
        }
    }
});

export const selectTheme = (state) => state.admin.darkTheme;

export default adminSlice.reducer;
export const {toggleTheme, nightTheme, lightTheme} = adminSlice.actions;