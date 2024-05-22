import { createSlice, isPending, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {ADDUSER} from '../Services/profileApi'

const initialState = {
    status: 'idle',
    allProfiles: [],
}

export const profileSlice = createSlice({ 
    name:'profiles',
    initialState,
    reducers: {
        
    },
    extraReducers (builder) {
        builder
                .addCase(ADDUSER.fulfilled, (state, action) => {
                    
                })
                .addMatcher(
                    isFulfilled(ADDUSER),
                    (state) => {
                    state.status = 'success'
                }
                )
                .addMatcher(
                    isPending(ADDUSER),
                    (state) => {
                    state.status = 'Loading.......';
                }
                )
                .addMatcher(
                    isRejected(ADDUSER),
                    (state, action) => {
                        state.status = 'failed';
                }
                )
    }
})


export default profileSlice.reducer