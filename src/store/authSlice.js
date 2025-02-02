import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthModalOpen: false,
        token:localStorage.getItem('token') || null,
        userName: localStorage.getItem('username') || null,
    },
    reducers: {
        openAuthModal: (state) => {
            state.isAuthModalOpen=true;
        },
        closeAuthModal: (state)=> {
            state.isAuthModalOpen = false;
        },
        setAuthData: (state, action) => {
            console.log(action)
            state.token = action.payload.token
            state.userName = action.payload.username
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('username',action.payload.username)
        },
        logOut: (state) => {
            state.token = null
            state.userName = null
            localStorage.removeItem('token')
            localStorage.removeItem('username')
        }
    }

})

export const {openAuthModal, closeAuthModal, setAuthData, logOut} = authSlice.actions;
export default authSlice.reducer
