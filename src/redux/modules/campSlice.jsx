import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  camps: [],
  isLoading: false,
  error: null,
};

const campSlice = createSlice({
  name: 'camps',
  initialState,
  reducers: {},
  extraReducers: {}
});

export const { } = campSlice.actions;
export default campSlice.reducer;