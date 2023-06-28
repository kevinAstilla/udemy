import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
    isCartModalShow: false,
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        cartModalShowToggle(state) {
            state.isCartModalShow = !state.isCartModalShow;
        },
        updateNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiAction = uiSlice.actions;
export default uiSlice.reducer;