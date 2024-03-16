import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { base_url } from '../../main';
import api from '../../utils/axiosInterceptor.js'

const initialState = {
    token: localStorage.getItem('token') || null,
    user: {},
    isAuthenticated: false,
    status: 'idle',
    error: null,
};

// API REQUESTS

// get user details - profile
export const getUser = createAsyncThunk('user/getUser', async () => {
    const response = await api.get(`${base_url}/api/user/profile`, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    });
    return response.data;
});

// googleSignUp
export const googleSignUp = createAsyncThunk('user/googleSignUp', async ({ name, email, avatar }) => {

    const response = await api.post(`${base_url}/api/user/signup/google`, {
        name, email, avatar
    }, {
        withCredentials: true,
    });
    return response.data;

});
// logout user
export const logoutUser = createAsyncThunk('user/logoutUser', async () => {

    const response = await api.get(`${base_url}/api/user/logout`,
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
    console.log(response);

    return response.data;
});

// Creating slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state, action) => {
            state.error = null,
            state.status = 'idle'
        },
    },
    extraReducers: (builder) => {
        builder
            //  get user details
            .addCase(getUser.pending, (state) => {
                state.status = 'loading';

                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                if (action.payload.success === true) {

                    state.status = 'succeeded';
                    state.user = action.payload.user;
                    state.isAuthenticated = true;
                }
                else {

                    state.status = 'failed';
                }

            })
            .addCase(getUser.rejected, (state, action) => {

                state.status = "failed";
            })


            // googleSignUp
            .addCase(googleSignUp.pending, (state) => {
                state.status = "loading";
                state.error = null;

            })
            .addCase(googleSignUp.fulfilled, (state, action) => {
                state.status = "succeeded";

                state.user = action.payload.user
                state.isAuthenticated = true
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(googleSignUp.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;

            })

            // logout user
            .addCase(logoutUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = null;
                state.isAuthenticated = false;
                localStorage.setItem('token', null);
                state.token = null;

            })
            .addCase(logoutUser.rejected, (state, action) => {

                state.status = 'failed';
                state.error = action.error.message;

            })


    },
});

export default userSlice.reducer;
export const { clearError } = userSlice.actions;

// Export any actions you need
export const selectUser = (state) => state.user;  
