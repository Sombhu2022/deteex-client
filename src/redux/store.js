import { configureStore } from '@reduxjs/toolkit';

// slices
import userReducer from './slices/authSlice'
import companyReducer from './slices/companySlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        company: companyReducer,

    }
}) 