import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    darkMode: false
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        toggleTheme(state){
            state.darkMode = !state.darkMode
        }
    }
});

export const selectTheme = (state) => state.admin.darkMode;
export default adminSlice.reducer;
export const {toggleTheme} = adminSlice.actions;