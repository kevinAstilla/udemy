import { createSlice } from '@reduxjs/toolkit';
const counterInitialState = {counter: 0, showCounter: true}

//REDUX TOOLKIT WAY
const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;