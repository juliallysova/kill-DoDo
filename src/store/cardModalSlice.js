import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCardModalOpen: false,
};

const cardModalSlice = createSlice({
    name:'modalCard',
    initialState,
    reducers: {
        openCardModal: (state) => {
            state.isCardModalOpen = true;
        },
        closeCardModal: (state) =>{
            state.isCardModalOpen = false;
        }
        
    }

})

export const {openCardModal, closeCardModal} = cardModalSlice.actions
export default cardModalSlice.reducer