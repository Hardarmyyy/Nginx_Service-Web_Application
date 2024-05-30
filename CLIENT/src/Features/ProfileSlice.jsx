import { createSlice, isPending, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {ADDUSER, ALLUSERS} from '../Services/profileApi'
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
                    isPending(ADDUSER, ALLUSERS),
                    (state) => {
                    state.status = 'Loading.......';
                }
                )
                .addMatcher(
                    isRejected(ADDUSER, ALLUSERS),
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