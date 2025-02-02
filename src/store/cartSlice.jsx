import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts:JSON.parse(localStorage.getItem('cartProducts') || '[]'),
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            localStorage.setItem('cartProducts', JSON.stringify([...state.cartProducts, action.payload]))
            state.cartProducts.push(action.payload)
        },
        deleteFromCart: (state,action) => {
            localStorage.setItem('cartProducts', action.payload)
            state.cartProducts = action.payload
        }
    }

})

export const {addToCart,deleteFromCart} = cartSlice.actions
export default cartSlice.reducer