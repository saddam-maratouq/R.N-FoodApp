import { StyleSheet, Text, View,Image , TouchableOpacity ,ScrollView,TextInput} from 'react-native'
import React, { useState , useEffect } from 'react' 

import { FontAwesome } from '@expo/vector-icons';


import {useSelector , useDispatch} from 'react-redux'   
import {deleteItem , changeQuantity } from '../redux/CartSlice'; 

import NumericInput from 'react-native-numeric-input' 


const CartItem = ({items}) => {

  


  const {Images,price , Mealname, itemQuantity}  = items 

  // const [ qty ,SetQty ] = useState(itemQuantity) 

   const [quanteity, setQuanteity] = useState(itemQuantity)
  
  //  console.log(quanteity)

  const dispatch = useDispatch() 

  
  const clickedId = items.id  

  
 

//   const DecreseQuntity = () => {  
   
//     if (qty == 0 ) {
//       SetQty(qty) 
//     }
//     else {  
//       SetQty( qty -  1  )
//     }
// }

  // you can pass item or id the same logic 
  // but you have notice redux logic 
  const deleteHandler = () => {  
      dispatch(deleteItem(clickedId)) 
  } 


  const handelIncreseQuantity = (val,id) => {  

    // const values = Number(value)
    setQuanteity( quanteity + 1 ) 
    dispatch(changeQuantity (val , id)) 
    console.log('hello Quantity',val)  
    console.log('hello Id', id) 
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

    
   {/* <NumericInput value={quanteity} 
     totalWidth={60} 
     totalHeight={40}  
     rightButtonBackgroundColor='#F66B0E' 
     leftButtonBackgroundColor='#F66B0E'
     onChange={value => handelQuantity(value)}   
   />  */}

  
      {/* Increse press  */} 

      <TouchableOpacity 
      onPress={()=>handelIncreseQuantity(quanteity,clickedId)}   
     >  
    <FontAwesome name="plus-circle" size={22} color="#F66B0E" /> 

     </TouchableOpacity > 
     
      <Text style={{ fontSize:18 , color:'gray' , marginHorizontal:5}} > {quanteity} </Text> 

      {/* Decrese press */}
      
      <TouchableOpacity 

      // onPress={DecreseQuntity} 
      onPress=  {()=>console.log('decrese')} 
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