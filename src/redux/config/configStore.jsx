import { configureStore } from '@reduxjs/toolkit';
import camps from '../modules/campSlice'
import comment from '../modules/commentSlice'

const store = configureStore({
  reducer: {
    camps: camps, comment:comment , 
  },
});

export default store;