import { createSlice } from "@reduxjs/toolkit";

export const taskDetailsSlice = createSlice({
    name: 'taskDetails',
    initialState: {
        subject: null,
        description: null
    },
    reducers: {
        setTaskDetails: (state, action) => {
            state.subject = action.payload.subject;
            state.description = action.payload.description;
        },
        deleteTaskDetails: (state) => {
            state.subject = null;
            state.description = null;
        }
    }
})

export const { setTaskDetails, deleteTaskDetails } = taskDetailsSlice.actions;
export default taskDetailsSlice.reducer;