import { configureStore } from '@reduxjs/toolkit'


import productReducer from  '../slices/products'
import cartReducer from '../slices/cart'
import ordersReducer from '../slices/orders'
import userReducer from '../slices/user'
import { loadState, saveState } from '../../hooks/useLocalStorage'

const preloadedState = loadState();

const reducer = {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    orders: ordersReducer
}

const store = configureStore({
    reducer,
    preloadedState
})

store.subscribe(() => {
    saveState({
        user: store.getState().user,
        cart: store.getState().cart,
        orders: store.getState().orders
    })
})

export default store;