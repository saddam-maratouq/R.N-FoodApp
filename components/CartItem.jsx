import { StyleSheet, Text, View,Image , TouchableOpacity ,ScrollView,TextInput} from 'react-native'
import React, { useState , useEffect } from 'react' 

import { FontAwesome } from '@expo/vector-icons';


import {useSelector , useDispatch} from 'react-redux'   
import {deleteItem , increseQuantity , decresrQuantity } from '../redux/CartSlice'; 

import NumericInput from 'react-native-numeric-input' 


const CartItem = ({items}) => {

  


  const {Images,price , Mealname, itemQuantity}  = items 

  

   const [quanteity, setQuanteity] = useState(itemQuantity)
  
 

  const dispatch = useDispatch() 

  
  const clickedId = items.id  

  


  // you can pass item or id the same logic 
  // but you have notice redux payload 
  const deleteHandler = () => {  
      dispatch(deleteItem(clickedId)) 
  } 


  // for Increse quantity by redux 
  const handelIncreseQuantity = (val) => {  

    // const result =  setQuanteity(val +1 ) 
    dispatch(increseQuantity ({  val  , clickedId}))   
    console.log('hello Quantity',val)   
    console.log('hello Id', clickedId)  
 } 

 

  // for Deccrese quantity by redux 
 
 const handelDecreseQuantity = (val) => {  

  if ( val < 0) {
    return val
  }
  // decrese action 
  dispatch(decresrQuantity ({  val  , clickedId}))  
  console.log('hello Quantity',val)   
  console.log('hello Id', clickedId)  
} 
  
   
 
  return ( 
  <>  
{/* <NumericInput value={this.state.value} onChange={value => this.setState({value})} /> */}


    
    <View style={styles.CartContainer} > 
     <Image 
     source={{uri:Images}} 
     style={styles.FoodImage} 
     resizeMode='contain'
     />  
     <View style={styles.quntityContent} > 

    
      {/* Increse press  */} 

      <TouchableOpacity 
      onPress={()=>handelIncreseQuantity(quanteity)}   
     >  
    <FontAwesome name="plus-circle" size={22} color="#F66B0E" /> 

     </TouchableOpacity > 
     
      <Text style={{ fontSize:18 , color:'gray' , marginHorizontal:5}} > {quanteity} </Text> 

      {/* Decrese press */}
      
      <TouchableOpacity 

      // onPress={DecreseQuntity} 

      onPress=  {()=>handelDecreseQuantity(quanteity) }  
      > 
    <FontAwesome name="minus-circle" size={20} color="#F66B0E" /> 

      </TouchableOpacity> 

    
     
    

      {/* Decrese press */}
      
     

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
    
    } , 
    input: {
      height: 40,
      width:20,
      margin: 5,
      borderWidth: 1,
      padding: 5,
    },
})