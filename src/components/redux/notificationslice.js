import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isOpened: false
}

export const notificationSlice = createSlice({
    name:'noti',
    initialState,
    reducers:{
        openNotifications : (state,actions) =>{
            state.isOpened = true
        },
        closeNotifications : (state,actions) =>{
            state.isOpened = false
        }
    }
})


export const {openNotifications, closeNotifications} = notificationSlice.actions
export default notificationSlice.reducer