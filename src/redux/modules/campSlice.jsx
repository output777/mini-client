import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  camps: [],
  isLoading: false,
  error: null,
};



export const __getCamps = createAsyncThunk('getCamps', async (_, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:3001/camps')
    // console.log('data', data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const __addCamps = createAsyncThunk('addCamp', async (payload, thunkAPI) => {
  try {
    const data = await axios.post('http://localhost:3001/camps', payload);
    // console.log('data', data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const __deleteCamp = createAsyncThunk("deleteCamp", async (payload, thunkAPI) => {
  try {
    const data = await axios.delete(`http://localhost:3001/camps/${payload}`);
    console.log(payload)
    return thunkAPI.fulfillWithValue(payload);
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

    // getCamps
    [__getCamps.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCamps.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.camps = action.payload;
    },
    [__getCamps.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    //  addCamp
    [__addCamps.pending]: (state) => {
      state.isLoading = true;
    },
    [__addCamps.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.camps.push(action.payload);
    },
    [__addCamps.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    //  deleteCamp
    [__deleteCamp.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteCamp.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state.camps)
      console.log(action)
      state.camps = state.camps.filter(camp => camp.id !== action.payload)
    },
    [__deleteCamp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },


  }
});

export const { } = campSlice.actions;
export default campSlice.reducer;