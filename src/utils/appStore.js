import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";      // importing cartSllice.reducer

const appStore = configureStore ({  // adding slices to this store
    reducer: {     // main reducer for our app
        cart: cartReducer,      // every slice has there own reducer
    },
});

export default appStore;
