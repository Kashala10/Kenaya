import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.push(action.payload);
        },
        deleteOrder: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})

export default orderSlice.reducer;