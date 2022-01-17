import { configureStore } from "@reduxjs/toolkit";
import userrReducer from "../features/userSlice";

export const store = configureStore({
    reducer: {
        user: userrReducer,
    },
});