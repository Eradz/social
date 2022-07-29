import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: true,
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers:{
        openMessage : (state,action) =>{
            state.isOpen = true
        },
        closeMessage : (state,action) =>{
            state.isOpen = false
        }
    }
})

export const {openMessage, closeMessage} = messageSlice.actions
export default messageSlice.reducer