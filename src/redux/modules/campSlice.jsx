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

export const __addCamp = createAsyncThunk('addCamp', async (payload, thunkAPI) => {
  try {
    console.log(payload)
    const data = await axios.post('http://localhost:3001/camps', payload);
    console.log('data', data);
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

export const __updateCamp = createAsyncThunk("updateTodos",async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/camps/${payload.id}`,payload);
      // console.log(payload)
      // console.log(data)
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      // console.log(payload)
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
    [__addCamp.pending]: (state) => {
      state.isLoading = true;
    },
    [__addCamp.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.camps.push(action.payload);
    },
    [__addCamp.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    //  deleteCamp
    [__deleteCamp.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteCamp.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(state.camps)
      // console.log(action)
      state.camps = state.camps.filter(camp => camp.id !== action.payload)
    },
    [__deleteCamp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // updateCamp
    [__updateCamp.pending]: (state) => {
      state.isLoading = true; 
    },

    [__updateCamp.fulfilled]: (state, action) => {
      state.isLoading = false; 
      console.log(action)
      console.log(state.camps)
      // state.todos = action.payload.updatetxt
      // state.todos = action.payload
      // const target = state.camps.findIndex(
      //   (camp) => camp.id === action.payload.id);
      
      //   state.camps.splice(target, 1, action.payload);
      state.camps.map((camp)=>
      camp.id === action.payload.id ? {...camp , title: action.payload.title , location: action.payload.location , review: action.payload.review} : camp
      )

    },
    [__updateCamp.rejected]: (state, action) => {
      state.isLoading = false; 
      state.error = action.payload; 
    },


  }
});

export const { } = campSlice.actions;
export default campSlice.reducer;