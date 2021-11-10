import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            state.splice(state.findIndex(product => product.id === action.payload), 1)
        },
        clearCart: (state, action) => {
            state.splice(0, state.length);
        }     
    }
})


export const { addProduct, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;