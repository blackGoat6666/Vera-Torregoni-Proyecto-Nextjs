import { createSlice, createSelector } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

const initialState = {
    loading: true,
    cartItems: [],
}

const addDecimals = (num) => {
    return (Math.round(num*100)/100).toFixed(2)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.id === item.id)
            if(existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x.id === existItem.id ? { ...x, qty: x.qty + 1 } : x
                )
            } else {
                state.cartItems = [...state.cartItems, { ...item, qty: 1 }]
            }
            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
            )
            state.totalPrice = addDecimals(Number(state.itemsPrice))
            Cookies.set('cart', JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if (existItem) {
                if (existItem.qty === 0) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
                } else {
                    // Reducir la cantidad en 1 si hay más de una unidad
                    state.cartItems = state.cartItems.map((x) =>
                        x.id === existItem.id ? { ...x, qty: x.qty - 1 } : x
                    );
                }
        
                state.itemsPrice = addDecimals(
                    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
                );
                state.totalPrice = addDecimals(Number(state.itemsPrice));
                Cookies.set('cart', JSON.stringify(state));
            }
        },
        
        hideLoading: (state) => {
            state.loading = false
        },
    },
})

export const {addToCart, removeFromCart, hideLoading} = cartSlice.actions

export const selectCart = state => state.cart;
export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
);
export const selectCartTotal = createSelector(
    selectCart,
    cart => cart.totalPrice
);

export default cartSlice.reducer