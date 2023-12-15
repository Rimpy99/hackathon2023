import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        token: null,
        permission: null, 
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.permission = action.payload.permission;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;