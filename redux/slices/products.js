import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsService } from '../../services/products.service'

const initialState = [];

export const addProduct = createAsyncThunk(
    'products/addProduct', 
    async (product) => {
        const res = await ProductsService.addProduct(product);
        return res;
    }
)


export const fetchProducts = createAsyncThunk(
    'products/getAll',
    async () => {
        const res = await ProductsService.getAll();
        console.log(res);
        return res;
    }
)

export const updateProduct = createAsyncThunk(
    'products/update',
    async({id, data}) => {
        const res = await ProductsService.update(id, data);
        return res;
    }
)

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id) => {
        const res = await ProductsService.delete(id);
        return res;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [addProduct.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state = action.payload;
        },
        [updateProduct.fulfilled]: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            state[index] = action.payload;
        },
        [deleteProduct.fulfilled]: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            state.splice(index, 1);
        }
    }   
})     

export default productsSlice.reducer;