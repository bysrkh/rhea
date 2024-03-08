import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    roles: [],
    permissions: []
}

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setRolesAndPermission(state, action) {
            state.isAuthenticated = action.payload.isAuthenticated
            state.roles = action.payload.roles
            state.permissions = action.payload.permissions
        }
    }
})

export const {setRolesAndPermission} = authenticationSlice.actions

export default authenticationSlice;