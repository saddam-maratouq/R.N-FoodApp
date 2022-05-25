

import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    cartItem : [] 
}
   

    




export const CartSlice = createSlice({
  name: 'products',
  initialState , 
  reducers: {
   
    addItem: (state, action) => {
      state.cartItem.push(action.payload) 
    }, 
    
  }
})

// Action creators are generated for each case reducer function
export const { addItem} = CartSlice.actions

export default CartSlice.reducer 