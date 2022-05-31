

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
    
    increseQuantity: (state, action) => { 
      
    const Incresefilter = state.cartItem.filter
    (c => c.id === action.payload.clickedId ? (c.itemQuantity = action.payload.val + 1)  : (c.itemQuantity ) ) 
   
     
    // console.log(Incresefilter)  

    // dont forget update state .... after filter   
    state.cartItem = Incresefilter  

    },  
    decresrQuantity: (state, action) => { 
      
      const decresefilter = state.cartItem.filter
      (c => c.id === action.payload.clickedId ? (c.itemQuantity = action.payload.val - 1)  : (c.itemQuantity ) ) 
     
          
      // console.log( 'hello decrese Arr', decresefilter)  
  
      // dont forget update state .... after filter   
      state.cartItem = decresefilter  
  
      },  
  }
})  

// Action creators are generated for each case reducer function
export const { addItem , deleteItem , increseQuantity , decresrQuantity} = CartSlice.actions 

export default CartSlice.reducer 



//

    