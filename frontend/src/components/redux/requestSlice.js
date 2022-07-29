import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isShow: false,
}

export const requestSlice = createSlice({
    name: 'requests',
    initialState,
    reducers:{
        openRequests : (state,action) =>{
            state.isShow = true
        },
        closeRequests : (state,action) =>{
            state.isShow = false
        }
    }
})

export const {openRequests, closeRequests} = requestSlice.actions
export default requestSlice.reducer