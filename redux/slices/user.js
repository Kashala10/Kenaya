import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.push(action.payload);
        },
        logout: (state, action) => {
            state = [];
        }
    }
})

export default userSlice.reducer;