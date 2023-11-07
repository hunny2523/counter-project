import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './countersSlice';
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        counters: counterReducer,
        user: userReducer
    },
});

export default store;