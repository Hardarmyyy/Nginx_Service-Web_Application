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


export {
    ADDUSER
}  