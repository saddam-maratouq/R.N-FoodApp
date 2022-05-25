import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {useSelector , useDispatch} from 'react-redux'   
import CartItem from '../components/CartItem'


const Cart = () => { 

  //state from redux 

  const  cartItems  = useSelector(state => state.product.cartItem)  

  console.log(cartItems)  
  console.log(cartItems.length)

  //  console.log(globalState.length) 

  return (
   <View style={styles.container} > 
   
  {!cartItems.length == 0 && cartItems.map(items  => (
      <View key={items.id} >

       <CartItem  items={items} />   
      </View> 
     ))  
  } 
   </View>
     )
}

export default Cart

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'flex-start',
        // alignItems:'center'
        paddingVertical:100,

    }
})