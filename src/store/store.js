import { configureStore} from "@reduxjs/toolkit";
import authReduser from './authSlice';
import modalCardReduser from './cardModalSlice';
import cartReducer from './cartSlice';
import cardReducer from './cardSlice';

export const store = configureStore({
    reducer:{
        authModal: authReduser,
        cardModal: modalCardReduser,
        cart: cartReducer,
        card: cardReducer,
    }
})

