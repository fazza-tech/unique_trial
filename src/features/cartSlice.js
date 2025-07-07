import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            // Check if item already exists
            const existing = state.items.find(item => item.id === action.payload.id)
            if (existing) {
                existing.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
        
    }
})

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer