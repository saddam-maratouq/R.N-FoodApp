import { StyleSheet, Text, View , ScrollView,SafeAreaView,StatusBar} from 'react-native'
import React , {useEffect}                                                                                                                                                                                                                                   from 'react'

import {useSelector , useDispatch} from 'react-redux'   
import CartItem from '../components/CartItem'

import { nanoid } from '@reduxjs/toolkit'


const Cart = () => { 

  //state from redux 
  const  cartItems  = useSelector(state => state.product.cartItem)  



  

  return ( 
    
    <SafeAreaView style={styles.containers} > 
    <ScrollView> 
   <View style={styles.container} > 
   
    {/* ternery logic for show Item and cart empty Title */} 
    
     {cartItems.length == 0 ?  
  
    (  <View> 
    
      <Text style={{fontSize:30,fontFamily:'Ruboto-bold' , marginHorizontal:10 }} > your Cart is empty </Text>
      
      </View>  
    
     ) 
  
    : 
    
    (
      cartItems.map(items  => (
      <View key={nanoid()} >

       <CartItem  items={items}  />   
      </View> 
     ))  
    )
  } 
   </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'flex-start',
        // alignItems:'center'
        paddingVertical:100,

    } ,

    containers: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
})