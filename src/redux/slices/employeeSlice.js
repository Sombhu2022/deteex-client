import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { base_url } from '../../main.jsx';
import api from '../../utils/axiosInterceptor.js'

const initialState = {
    allEmp: [],
    selectedEMP: {},
    status: 'idle',
    empStatus: {
        createEmp: 'idle'
    },
    error: null,
};


export const getAllEmp = createAsyncThunk('employee/getAllEmp', async () => {

    const response = await api.get(`${base_url}/api/employee/all`,
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
    console.log("all emp", response);

    return response.data;
});



// add company
export const addEmployee = createAsyncThunk('employee/addEmployee', async ({
    empName,
    email,
    birthDay,
    avatar,
    address,
    location,
    phoneNo,
    jobRole,
    previousCMP,
    andharNo,
    panNo,
    grantedAmount,
    paybleAmount,
    dateOfJoin,
    bankDetails,
    PFaccountNo,
    ESIaccountNo,
    UANno,
    statusOfWorker,
    reservedFor
}) => {
    console.log("slice");

    const response = await api.post(`${base_url}/api/employee/add`,
        {
            empName,
            email,
            birthDay,
            avatar,
            address,
            location,
            phoneNo,
            jobRole,
            previousCMP,
            andharNo,
            panNo,
            grantedAmount,
            paybleAmount,
            dateOfJoin,
            bankDetails,
            PFaccountNo,
            ESIaccountNo,
            UANno,
            statusOfWorker,
            reservedFor
        },
        {
            withCredentials: true,
        });
    console.log(response.data);
    return response.data;

});

// Creating slice
const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        clearError: (state, action) => {
            state.error = null,
                state.status = 'idle',
                state.empStatus.createEmp = 'idle'


        },
    },
    extraReducers: (builder) => {
        builder
            //  get alll emp
            .addCase(getAllEmp.pending, (state) => {
                state.status = 'loading';
                state.error = null;

            })
            .addCase(getAllEmp.fulfilled, (state, action) => {
                state.status = "succeeded";

                state.allEmp = action.payload.allEmployee;

            })
            .addCase(getAllEmp.rejected, (state, action) => {

                state.status = "failed";
            })
            //  add company
            .addCase(addEmployee.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.empStatus.createEmp = 'loading'
            })
            .addCase(addEmployee.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.empStatus.createEmp = 'succeeded'
                state.allEmp = action.payload.allEmployee;
                state.selectedEMP = action.payload.employe;
            })
            .addCase(addEmployee.rejected, (state, action) => {
                state.empStatus.createEmp = 'failed'
                state.status = "failed";
            })
    },
});

export default employeeSlice.reducer;
export const { clearError } = employeeSlice.actions;

// Export any actions you need
export const selectEmployee = (state) => state.employee;  
