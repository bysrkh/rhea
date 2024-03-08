import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
}

const productSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload.isLoading
        }
    }
})

export const {setLoading} = productSlice.actions

export default productSlice;