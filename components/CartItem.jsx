import { StyleSheet, Text, View,Image , TouchableOpacity ,ScrollView} from 'react-native'
import React, { useState , useEffect } from 'react' 

import { FontAwesome } from '@expo/vector-icons';


import {useSelector , useDispatch} from 'react-redux'   
import {deleteItem , IncreseQuantity } from '../redux/CartSlice'; 

const CartItem = ({items}) => {

  


  const {Images,price , Mealname, itemQuantity}  = items 

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


  const handelIncreseQuantity = (val) => {  
    
    SetQty(qty +1 ) 
   dispatch(IncreseQuantity(val,clickedId)) 
  //  console.log('hello val',val)  
  //  console.log('hello id',clickedId)   
} 

 

  
  
  


  return (
     
  <>  
    
    <View style={styles.CartContainer} > 
     <Image 
     source={{uri:Images}} 
     style={styles.FoodImage} 
     resizeMode='contain'
     />  
     <View style={styles.quntityContent} > 

      {/* Increse press  */} 

     <TouchableOpacity 
      onPress={()=>handelIncreseQuantity(qty)}   
     >  
    <FontAwesome name="plus-circle" size={22} color="#F66B0E" /> 

     </TouchableOpacity > 
     
      <Text style={{ fontSize:18 , color:'gray' , marginHorizontal:5}} > {qty} </Text> 

      {/* Decrese press */}
      
      <TouchableOpacity 

      // onPress={DecreseQuntity} 
      onPress=  {DecreseQuntity} 
      > 
    <FontAwesome name="minus-circle" size={20} color="#F66B0E" /> 

      </TouchableOpacity> 

     </View> 

      <Text style={{ fontFamily:'Ruboto-regular', fontSize:15 }} > {Mealname} </Text>  
      <Text> $ {price} </Text>


      <TouchableOpacity  onPress={deleteHandler} >  
    
    <FontAwesome name="remove" size={20} color="#F66B0E" />     
    
    </TouchableOpacity>  
    </View>
   
 </>
   
  )
}

export default CartItem

const styles = StyleSheet.create({
    CartContainer : {
       justifyContent:'space-around',
       flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'gray'
        
    },

    FoodImage : {
        width:90,
        height:90,
    }, 

    quntityContent : {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center' ,
      // marginHorizontal:20 ,
      paddingHorizontal:20,
      
      
    }
})