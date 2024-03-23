import { configureStore } from '@reduxjs/toolkit';

// slices
import userReducer from './slices/authSlice'
import companyReducer from './slices/companySlice'
import employeeReducer from './slices/employeeSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        company: companyReducer,
        employee: employeeReducer,

    }
}) 