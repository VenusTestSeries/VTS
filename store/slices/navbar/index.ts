
import { createSlice } from "@reduxjs/toolkit"

const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        isNav: false,
    },
    reducers: {
        toggle: (state, action) => {
            state.isNav = action.payload
        },
    }
})

export default navbarSlice