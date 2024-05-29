import { createSlice, isPending, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {ADDUSER, ALLUSERS} from '../Services/profileApi'

const initialState = {
    status: 'idle',
    error: null,
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
                    const {user} = action.payload
                    state.allProfiles = state.allProfiles.concat(user)
                })
                .addCase(ALLUSERS.fulfilled, (state, action) => {
                    const {allUsers} = action.payload
                    state.allProfiles = state.allProfiles.concat(allUsers)
                })
                .addMatcher(
                    isFulfilled(ADDUSER, ALLUSERS),
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
                    isRejected(ADDUSER, ALLUSERS),
                    (state, action) => {
                        state.status = 'failed';
                        state.error = action.payload.error;
                }
                )
    }
})


export default profileSlice.reducer