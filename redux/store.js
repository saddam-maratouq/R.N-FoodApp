

   

// import thunk from 'redux-thunk'

import { configureStore  } from '@reduxjs/toolkit'
// import { counterSlice } from "./CounterSlice";
// import counterReducer from './CounterSlice'
import CartReducer from './CartSlice'
import userReducer from './userSlice'



// const store = createStore(AppReducer ,applyMiddleware(thunk) ) 

export default configureStore({
  reducer: {
      product : CartReducer,   
      user : userReducer 
  }
})



