import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPhoto = createAsyncThunk('auth/fetchLogin', async () => {
    const { data } = await axios.get('/today');
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: { 
        logout(state) {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhoto.pending, (state) => {
                state.status = 'loading';
                state.data = null;
            })
            .addCase(fetchPhoto.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(fetchPhoto.rejected, (state) => {
                state.status = 'failed';
                state.data = null;
            });
    },
});

export const photoReducer = photoSlice.reducer;
