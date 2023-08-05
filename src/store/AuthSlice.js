import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        allowed:false
    },
    reducers:{
        isLoggedIn:(state,action)=>{
            state.allowed = true
            state.user =action.payload
        },
        LoggedOut:(state)=>{
           state.allowed = false
        }
    }
})


export const {isLoggedIn,LoggedOut}=authSlice.actions;
export const selectloggedIn=state=>state.user.loggedIn
export const selectInfo=state=>state.user
export const isAllowed = state=>state.allowed
export default authSlice.reducer;