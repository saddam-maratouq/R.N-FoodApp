

import { createSlice } from '@reduxjs/toolkit' 

// import Container, {Toast} from 'toastify-react-native';


const initialState = {
    cartItem : [] 
}
   

    

export const CartSlice = createSlice({
  name: 'products',
  initialState , 
  reducers: {
   
    addItem: (state, action) => { 
      const tempProduct = { ...action.payload, itemQuantity : 1 } 
      state.cartItem.push(tempProduct);   
     
    }, 

    deleteItem: (state, action) => { 
      //if you want to pass item it self fouces on redux logic action.paylod.id 
      //if you pass id action.payload is staibel  
      const filtration = state.cartItem.filter(food => food.id  !==  action.payload) 
      // dont forget update state .... after removed 
      state.cartItem = filtration
      
    }, 
  }
})

// Action creators are generated for each case reducer function
export const { addItem , deleteItem } = CartSlice.actions 

export default CartSlice.reducer 