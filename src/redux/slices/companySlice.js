import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { base_url } from '../../main.jsx';
import api from '../../utils/axiosInterceptor.js'

const initialState = {
    allCompany: [],
    selectedCMP: {},
    status: 'idle',
    cmpStatus: {
        addCompany: 'idle',
        getAllCompany: 'idle',
        deleteCompany: "idle"
    },
    error: null,
};


// add company
export const addCompany = createAsyncThunk('company/addCompany', async ({ cmpName, cmpEmail, address, phoneNo, cmpType, file, reqRoles }) => {

    const response = await api.post(`${base_url}/api/company/add`, { cmpName, cmpEmail, address, phoneNo, cmpType, file, reqRoles },
        {
            withCredentials: true,
        });
    return response.data;

});

// get all company
export const getAllCompany = createAsyncThunk('company/getAllCompany', async () => {

    const response = await api.get(`${base_url}/api/company/all`, {
        withCredentials: true,
    });
    return response.data;

});
// delete company
export const deleteCompany = createAsyncThunk('company/deleteCompany', async ( id ) => {
console.log(id);
    const response = await api.delete(`${base_url}/api/company/delete/${id}`, {
        withCredentials: true,
    });
    return response.data;

});


// Creating slice
const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        clearError: (state, action) => {
            state.error = null,
                state.status = 'idle',
                state.cmpStatus.addCompany = 'idle',
                state.cmpStatus.getAllCompany = 'idle',
                state.cmpStatus.deleteCompany = 'idle'
                
        },
    },
    extraReducers: (builder) => {
        builder
            //  add company
            .addCase(addCompany.pending, (state) => {
                state.status = 'loading';
                state.cmpStatus.addCompany = 'loading'
                state.error = null;
            })
            .addCase(addCompany.fulfilled, (state, action) => {
                state.selectedCMP = action.payload.company
                state.status = "succeeded";
                state.cmpStatus.addCompany = 'succeeded'
            })
            .addCase(addCompany.rejected, (state, action) => {
                state.status = "failed";
                state.cmpStatus.addCompany = 'failed'
            })

            //  get all company
            .addCase(getAllCompany.pending, (state) => {
                state.status = 'loading';
                state.cmpStatus.getAllCompany = 'loading';
                state.error = null;
            })
            .addCase(getAllCompany.fulfilled, (state, action) => {
                state.allCompany = action.payload.allCompany
                state.status = "succeeded";
                state.cmpStatus.getAllCompany = "succeeded";
            })
            .addCase(getAllCompany.rejected, (state, action) => {
                state.status = "failed";
                state.cmpStatus.getAllCompany = "failed";
            })
            //  get all company
            .addCase(deleteCompany.pending, (state) => {
                state.status = 'loading';
                state.cmpStatus.deleteCompany = 'loading';
                state.error = null;
            })
            .addCase(deleteCompany.fulfilled, (state, action) => {
                state.allCompany = action.payload.allCompany
                state.status = "succeeded";
                state.cmpStatus.deleteCompany = "succeeded";
            })
            .addCase(deleteCompany.rejected, (state, action) => {
                state.status = "failed";
                state.cmpStatus.deleteCompany = "failed";
            })


    },
});

export default companySlice.reducer;
export const { clearError } = companySlice.actions;

// Export any actions you need
export const selectCompany = (state) => state.company;  
