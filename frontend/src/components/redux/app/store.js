//2
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authSlice"; 
import messageReducer from "../messageSlice";
import notificationreducer from "../notificationslice";
import requestSlice from "../requestSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        message: messageReducer,
        noti: notificationreducer,
        req: requestSlice
    },
})