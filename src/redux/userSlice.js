import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        token: null,
        permission: null,
        login: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.permission = action.payload.permission;
            state.login = action.payload.login;
        },
        signOut: (state) => {
            state.id = null;
            state.token = null;
            state.permission = null;
            state.login = null;
        }
    }
})

export const { setUser, signOut } = userSlice.actions;
export default userSlice.reducer;