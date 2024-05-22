import {configureStore, combineReducers} from '@reduxjs/toolkit'
import profileReducer from '../Features/ProfileSlice';

const reducers = combineReducers({
    profiles: profileReducer
});

const store = configureStore({
    reducer: reducers
})

export default store;