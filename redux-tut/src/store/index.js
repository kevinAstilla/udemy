// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authenticationReducer from './authentication';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        authentication: authenticationReducer
    }
})

// //DEPRACATED REDUXT WAY
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.increase,
//             showCounter: state.showCounter,
//         };
//     }

//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         };
//     }

//     return state
// }
// const store = createStore(counterReducer);

export default store;