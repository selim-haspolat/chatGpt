import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: '',
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload
        },
        deleteUser: (state) => {
            state.user = null
        }
    }
})


export const { setUser, deleteUser } = authSlice.actions
export default authSlice.reducer