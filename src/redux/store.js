import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import taskDetailsReducer from './taskDetailsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    taskDetails: taskDetailsReducer,
  }
});

export default store;