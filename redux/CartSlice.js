

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
      // state.cartItem = itemAdded
    }, 

    deleteItem: (state, action) => { 
      //if you want to pass item it self fouces on redux logic action.paylod.id 
      //if you pass id action.payload is staibel  
      const filtration = state.cartItem.filter(food => food.id  !==  action.payload) 
      // dont forget update state .... after removed 
      state.cartItem = filtration
      
    },  
    
    changeQuantity: (state, action) => { 
      
    const Incresefilter = state.cartItem.filter
    (c => c.id === action.payload.id ? (c.itemQuantity = action.payload.val)  : c.itemQuantity )  
   
     console.log(action.payload) 
    // console.log(Incresefilter)  
    
    state.cartItem = Incresefilter  

    },  
  }
})  

// Action creators are generated for each case reducer function
export const { addItem , deleteItem , changeQuantity } = CartSlice.actions 

export default CartSlice.reducer 



//

    