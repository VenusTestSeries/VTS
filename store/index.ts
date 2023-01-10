import navbarSlice from "./slices/navbar";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        navbar: navbarSlice.reducer,
    },
    devTools: true,
})
export default store;
