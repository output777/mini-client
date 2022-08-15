import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  camps: [],
  isLoading: false,
  error: null,
};

export const __getCamps = createAsyncThunk(
  "camps/getCamps",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/camps");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postCamps = createAsyncThunk(
  "camps/postCamps",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/camps", payload);
      // console.log(payload)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const campSlice = createSlice({
  name: 'camps',
  initialState,
  reducers: {},
  extraReducers: {
    [__getCamps.pending]: (state) => {
      state.isLoading = true;
    },

    [__getCamps.fulfilled]: (state, action) => {
      state.isLoading = false; 
      state.camps = action.payload; 

    },
    [__getCamps.rejected]: (state, action) => {
      state.isLoading = false; // 
      state.error = action.payload; 
    },
    [__postCamps.pending]: (state) => {
      state.isLoading = true; 
    },

    [__postCamps.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(state.camps)
      // console.log(action.payload)
      state.camps.push(action.payload)
    },

    [__postCamps.rejected]: (state, action) => {
      state.isLoading = false; 
      state.error = action.payload; 
    },
  }
});

export const { } = campSlice.actions;
export default campSlice.reducer;