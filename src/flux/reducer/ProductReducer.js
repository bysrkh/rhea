import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productCreate: {},
    productList: [],
    productUpdate: {}
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProductList(state, action) {
            state.productList = action.payload.productList
        },
        createProduct(state, action) {
            state
        }
    }
})

export const {getProductList} = productSlice.actions

export default productSlice;