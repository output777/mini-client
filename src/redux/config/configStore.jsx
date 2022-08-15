import { configureStore } from '@reduxjs/toolkit';
import camps from '../modules/campSlice'

const store = configureStore({
  reducer: {
    camps: camps,
  },
});

export default store;