import { StyleSheet, Text, View,Image , TouchableOpacity ,ScrollView} from 'react-native'
import React, { useState } from 'react'

import { FontAwesome } from '@expo/vector-icons';


import {useSelector , useDispatch} from 'react-redux'   
import { addItem , deleteItem } from '../redux/CartSlice'; 

const CartItem = ({items}) => {

  const {Images,price , Mealname, ingredients,itemQuantity}  = items 

  const [ qty ,SetQty ] = useState(itemQuantity) 

   

  const dispatch = useDispatch() 

  
  const clickedId = items.id  

  
  const increseQuntity = () => {  
   SetQty( qty + 1  )
    
  }

  const DecreseQuntity = () => {  
   
    if (qty == 0 ) {
      SetQty(qty) 
    }
    else {  
      SetQty( qty -  1  )
    }
}

  // you can pass item or id the same logic 
  // but you have notice redux logic 
  const deleteHandler = () => {  
      dispatch(deleteItem(clickedId)) 
  }


  return (
     
   
    
    <View style={styles.CartContainer} >
     <Image 
     source={{uri:Images}} 
     style={styles.FoodImage} 
     />  
     <View style={styles.quntityContent} > 

      {/* Increse press  */} 
     <TouchableOpacity 
      onPress={increseQuntity}
     >  
    <FontAwesome name="plus-circle" size={22} color="#F66B0E" /> 

     </TouchableOpacity > 
     
      <Text style={{ fontSize:18 , color:'gray' , marginHorizontal:5}} > {qty} </Text> 

      {/* Decrese press */}
      <TouchableOpacity 

      onPress={DecreseQuntity}
      > 
    <FontAwesome name="minus-circle" size={20} color="#F66B0E" />

      </TouchableOpacity> 

     </View>

      <Text> {Mealname} </Text> 
      <Text> $  {price} </Text>


      <TouchableOpacity  onPress={deleteHandler} >  
    
    <FontAwesome name="remove" size={20} color="#F66B0E" />     
    
    </TouchableOpacity>  
    </View>
   

   
  )
}

export default CartItem

const styles = StyleSheet.create({
    CartContainer : {
       justifyContent:'space-around',
       flexDirection:'row',
        alignItems:'center',
        borderWidth:2,
        borderColor:'gray'
       
        
    },

    FoodImage : {
        width:100,
        height:100,
    }, 

    quntityContent : {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center' ,
      // marginHorizontal:20 ,
      paddingHorizontal:20,
      
      
    }
})