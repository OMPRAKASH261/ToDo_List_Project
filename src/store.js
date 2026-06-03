// Reducer imports
import todoReducer from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";



const stroe = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV != 'production',
})

export default stroe;