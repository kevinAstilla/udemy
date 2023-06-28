import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = {
    items: [],
    totalAmount: 0,
    totalItem: 0,
    changed: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        setCart(state, action) {
            state.items = action.payload.items;
            state.totalItem = action.payload.totalItem;
            console.log('called');
        },
        addItem(state, action) {
            state.totalAmount += action.payload.itemPrice;
            state.totalItem += 1;
            state.changed = true;

            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.title)
            const existingItem = state.items[existingItemIndex];

            if(existingItem) {
                state.items[existingItemIndex].quantity += 1;
                state.items[existingItemIndex].total += action.payload.price;
            } else {
                action.payload.id = action.payload.title;
                action.payload.total = action.payload.price;
                action.payload.quantity = 1;
                state.items.push(action.payload);
            }
        },
        removeItem(state, action) {
            state.totalAmount -= action.payload.itemPrice;
            state.totalItem -= 1;
            state.changed = true;
            
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.title)
            const existingItem = state.items[existingItemIndex];

            if(existingItem) {
                //check if theres more than one
                if (existingItem.quantity === 1) {
                    state.items.splice(existingItemIndex,1);
                } else {
                    state.items[existingItemIndex].quantity -= 1;
                    state.items[existingItemIndex].total -= action.payload.price
                }
            }
            
        },
        clearItem(state) {
            state.items = [];
        }
    }
})
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;