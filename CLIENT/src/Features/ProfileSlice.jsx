import { createSlice, isPending, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {ADDUSER, ALLUSERS, UPDATEUSER} from '../Services/profileApi'
import {toast} from 'react-toastify'

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
                    const {user} = action.payload
                    state.allProfiles = state.allProfiles.concat(user)
                })
                .addCase(UPDATEUSER.fulfilled, (state, action) => {
                    const {user} = action.payload
                    const updatedUser = {userId: user._id, ...user}
                    const updatedProfiles = state.allProfiles.filter((profile) => profile.userId !== user._id)
                    state.allProfiles = [...updatedProfiles, updatedUser]
                })
                .addCase(ALLUSERS.fulfilled, (state, action) => {
                    const {allUsers} = action.payload
                    state.allProfiles = state.allProfiles.concat(allUsers)
                })
                .addMatcher(
                    isFulfilled(ADDUSER, UPDATEUSER, ALLUSERS),
                    (state) => {
                    state.status = 'success'
                }
                )
                .addMatcher(
                    isPending(ADDUSER, UPDATEUSER),
                    (state) => {
                    state.status = 'Loading...';
                }
                )
                .addMatcher(
                    isPending(ALLUSERS),
                    (state) => {
                    state.status = 'Loading.......';
                }
                )
                .addMatcher(
                    isRejected(ADDUSER, UPDATEUSER, ALLUSERS),
                    (state, action) => {
                        state.status = 'failed';
                        const err = action.payload.error
                        toast.error(err, {
                            toastStyle: { background: 'red', color: 'white' }
                        })
                }
                )
    }
})


export default profileSlice.reducer