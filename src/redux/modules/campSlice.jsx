import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  camps: [],
  user: '',
  isLoading: false,
  error: null,
  loginSuccess: false,
};


export const __loginCamp = createAsyncThunk('loginCamp', async (payload, thunkAPI) => {
  try {
    // const config = {
    //   headers: {
    //     Authorization: localStorage.getItem('token')
    //   }
    // }
    const data = await axios.post('api/member/login', payload);
    localStorage.setItem('token', data.headers.authorization);
    // console.log(data)
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    // console.log(error.message)
    return thunkAPI.rejectWithValue(error.message)
  }
})



export const __getCamps = createAsyncThunk('getCamps', async (_, thunkAPI) => {
  try {
    if (localStorage.getItem('token') !== null) {
      const config = {
        headers: {
          Authorization: localStorage.getItem('token')

        }
      }
      const data = await axios.get('api/camp', config);
      return thunkAPI.fulfillWithValue({ headers: data.headers, data: data.data });
    } else {
      const data = await axios.get('api/camp');
      return thunkAPI.fulfillWithValue({ headers: data.headers, data: data.data });
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const __addCamp = createAsyncThunk('addCamp', async (payload, thunkAPI) => {
  console.log('payload', payload)
  for (var value of payload.values()) {
    console.log('formdata value', value);
  }
  try {
    // "content-type": "application/json; multipart/form-data", 
    const config = {
      headers: {
        "Content-type": false, responseType: 'blob', Authorization: localStorage.getItem('token')

      }
    }
    const data = await axios.post('api/auth/camp', payload, config);
    // console.log('data', data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {

    console.log('error', error)
    return thunkAPI.rejectWithValue(error)
  }
})


export const __deleteCamp = createAsyncThunk("deleteCamp", async (payload, thunkAPI) => {
  console.log('payload', payload)
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    await axios.delete(`api/auth/camp/${payload}`, config);
    // console.log('data', data)
    // console.log(payload)
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    // console.log('error', error)
    return thunkAPI.rejectWithValue(error);
  }
}
);

export const __updateCamp = createAsyncThunk("updateTodos", async (payload, thunkAPI) => {
  // console.log('payload', payload)
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    await axios.put(`api/auth/camp/${payload.id}`, payload, config);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    // console.log('error', error)
    return thunkAPI.rejectWithValue(error.message);
  }
}
);



const campSlice = createSlice({
  name: 'camps',
  initialState,
  reducers: {},
  extraReducers: {



    //  loginCamp
    [__loginCamp.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginCamp.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.user = action.payload.nickname;
      state.error = null;
      state.loginSuccess = true;
    },
    [__loginCamp.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
      state.loginSuccess = false;
    },
    // getCamps
    [__getCamps.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCamps.fulfilled]: (state, action) => {
      state.isLoading = true;
      // console.log('action.payload', action.payload);
      state.camps = action.payload.data;
      state.user = action.payload.headers.nickname;
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
      // console.log('action', action)
      // console.log('action.payload', action.payload)
      state.camps = state.camps.map((camp) => {
        if (camp.id === action.payload.id) {
          camp = action.payload;
        }
        return camp;
      })

    },
    [__updateCamp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },


  }
});

export const { } = campSlice.actions;
export default campSlice.reducer;