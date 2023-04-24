import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../components/login/Login.Slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer    
  },
});
