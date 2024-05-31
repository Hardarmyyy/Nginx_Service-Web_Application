import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../Utilities/Axios";

const ADDUSER = createAsyncThunk('profile/add-user', async (newUser, { rejectWithValue }) => { 
    try {
        const response = await axiosInstance.post('/add-user', newUser)
        return response.data
    }
    catch (err) {
        if (!err.response) {
            return rejectWithValue({ error: "Unable to connect to the server" });
        }
        return rejectWithValue(err.response.data);
    }
})

const UPDATEUSER = createAsyncThunk('profile/update-user', async ({id, updateUser}, { rejectWithValue }) => { 
    try {
        const response = await axiosInstance.patch(`/${id}`, updateUser)
        return response.data
    }
    catch (err) {
        if (!err.response) {
            return rejectWithValue({ error: "Unable to connect to the server" });
        }
        return rejectWithValue(err.response.data);
    }
})

const ALLUSERS = createAsyncThunk('profile/all-users', async ( _, {rejectWithValue} ) => { 
    try {
        const response = await axiosInstance.get('/all-users')
        return response.data
    }
    catch (err) {
        if (!err.response) {
            return rejectWithValue({ error: "Unable to connect to the server" });
        }
        return rejectWithValue(err.response.data);
    }
})



export {
    ADDUSER,
    ALLUSERS,
    UPDATEUSER
}  