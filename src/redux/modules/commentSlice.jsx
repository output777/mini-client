import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

// export const __getComments = createAsyncThunk('getComment', async (payload, thunkAPI) => {
//   console.log('payload', payload)
//   try {

//     const config = {
//       headers: {
//         Authorization: localStorage.getItem('token')
//       }
//     }

//     const data = await axios.get(`api/comment/${payload}`, config)
//     console.log('data', data)
//     return thunkAPI.fulfillWithValue(data.data);
//   } catch (error) {
//     console.log('error', error);
//     return thunkAPI.rejectWithValue(error)
//   }
// })

export const __addComment = createAsyncThunk('addComment', async (payload, thunkAPI) => {
  console.log('payload', payload)
  console.log('payload.comment', typeof payload.comment, payload.comment)
  try {
    const config = {
      headers: {
        "Content-Type": 'application/json', Authorization: localStorage.getItem('token')
      }
    }
    const data = await axios.post(`api/auth/comment/${payload.commentID}`, payload.comment, config);
    console.log('data', data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    console.log('error', error.message);
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const __deleteComment = createAsyncThunk("deleteComment", async (payload, thunkAPI) => {
  console.log('payload', payload)

  try {
    const config = {
      headers: {
         Authorization: localStorage.getItem('token')
      }
    }
    const data = await axios.delete(`api/auth/comment/${payload.campingID}/${payload.commentID}` , config);
    console.log('data', data)
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    console.log('error' , error)
    return thunkAPI.rejectWithValue(error);
  }
}
);

export const __updateComment = createAsyncThunk("updateComment", async (payload, thunkAPI) => {
  try {
    console.log('payload' , payload)
    const config = {
      headers: {
        "Content-Type": 'application/json', Authorization: localStorage.getItem('token')
      }
    }

    await axios.put(`api/auth/comment/${payload.campingID}/${payload.commentID}`, payload.content , config);
    
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
      console.log('error',error)
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
    // [__getComments.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getComments.fulfilled]: (state, action) => {
    //   state.isLoading = true;
    //   state.comment = action.payload;
    // },
    // [__getComments.rejected]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = action.payload;
    // },
    //  addComment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = true;
      // console.log(state.comment)
      // console.log(action.payload)
      // state.comment.push(action.payload);
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
      // console.log("state",state.comment)
      // console.log("action",action.payload)
      state.comment = state.comment.filter(comment => comment.id !== action.payload.commentID)
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
      console.log("state",state.comment)
      console.log("action",action.payload)
      state.comment = state.comment.map((comment) => {
        console.log('comment' , comment)
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