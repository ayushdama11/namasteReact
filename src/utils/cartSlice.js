import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action) => {
            // mutating the state over here - basically modifying the existing state only, no new state is created
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state,action) => { 
            state.items.length = 0;     // makes state an empty array
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;    // exporting actions

export default cartSlice.reducer;