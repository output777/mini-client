import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk('getComment', async (_, thunkAPI) => {
    try {
      const data = await axios.get('http://localhost:3001/comment')
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  })
  
  export const __addComment = createAsyncThunk('addComment', async (payload, thunkAPI) => {
    try {
      console.log(payload)
      const data = await axios.post('http://localhost:3001/comment', payload);
      console.log('data', data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  })

  export const __deleteComment = createAsyncThunk("deleteComment", async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  );
  
  export const __updateComment = createAsyncThunk("updateComment", async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/comment/${payload.id}`, payload);
    //   console.log(payload)
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
    //   console.log(payload)
      return thunkAPI.rejectWithValue(error);
    }
  }
  );

  const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: {
  
      // getComments
      [__getComments.pending]: (state) => {
        state.isLoading = true;
      },
      [__getComments.fulfilled]: (state, action) => {
        state.isLoading = true;
        state.comment = action.payload;
      },
      [__getComments.rejected]: (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      },
      //  addComment
      [__addComment.pending]: (state) => {
        state.isLoading = true;
      },
      [__addComment.fulfilled]: (state, action) => {
        state.isLoading = true;
        // console.log(state.comment)
        // console.log(action.payload)
        state.comment.push(action.payload);
      },
      [__addComment.rejected]: (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      },
      //  deleteComment
      [__deleteComment.pending]: (state) => {
        state.isLoading = true;
      },
      [__deleteComment.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.comment = state.comment.filter(comment => comment.id !== action.payload)
      },
      [__deleteComment.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
  
      // updateComment
      [__updateComment.pending]: (state) => {
        state.isLoading = true;
      },
  
      [__updateComment.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.comment = state.comment.map((comment) => {
          if (comment.id === action.payload.id) {
            comment = action.payload;
          }
          return comment;
        })
  
      },
      [__updateComment.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
  
  
    }
  });
  
  export const { } = commentSlice.actions;
  export default commentSlice.reducer;