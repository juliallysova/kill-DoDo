import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzas: []
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzas = action.payload
        } 
    }
})

export const {setPizzas} = cardSlice.actions
export default cardSlice.reducer