import { StyleSheet
  ,Text, 
  View 
  , ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ToastAndroid
}
   from 'react-native'
 
import React , {useEffect,useState}   from 'react'                                                                                                                                                                                                                  
import {useSelector , useDispatch} from 'react-redux'   
import { nanoid } from '@reduxjs/toolkit'

import CartItem from '../components/CartItem' 

//navigation 
import { useNavigation } from '@react-navigation/native';

//icon
import { Feather } from '@expo/vector-icons';



const Cart = () => { 

  //state from redux 
  const  cartItems  = useSelector(state => state.product.cartItem)  

  // console.log(cartItems) 

  const [ total , SetTotal] = useState()     
 
  
  const navigation = useNavigation(); 
 
 


  //calc total quantity 
  const  CalcTotal = () => {  
    const totals =  cartItems.reduce((acc,item) =>   acc + (item.price * item.itemQuantity)   , 0 )  
    SetTotal(totals) 
  } 
  // 
  
   useEffect(() => {
    CalcTotal();
   }, [cartItems]) 

   // function  for toast messges 
   const paySubmit =  () => {
    ToastAndroid.show('Successfully Payed  ', 
    ToastAndroid.LONG)  
 
   } 


  return ( 
    
    <SafeAreaView style={styles.containers} > 
    <ScrollView> 
   <View style={styles.container} > 

     <View style={styles.menuIcon} >  
      <TouchableOpacity 
        onPress={() => navigation.openDrawer()}
     >
    <Feather name="menu" size={24} color="black" />
    
     </TouchableOpacity> 

     </View>  
   
    {/* ternery logic for show Item and cart empty Title  */}
    
     {cartItems.length == 0 ?  
  
    (  <View> 
      

    
      <Text style={{fontSize:30,fontFamily:'Ruboto-bold' , marginHorizontal:10 }}
      
       > Your Cart is empty ....
       
        </Text>
      
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

    <Text style={{ fontSize:25, marginVertical:20  }} >  Curent Total : $ {total}</Text> 
  
    <TouchableOpacity 
       onPress={paySubmit}
     > 
    <View  style={styles.payContent} > 
    
      <Text style={{ fontSize :20 , textAlign:'center' , color:'#fff' }}> Pay </Text>
    </View>
    </TouchableOpacity> 
    
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
        paddingVertical:50,

    } ,

    containers: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },

    menuIcon : {
      alignItems:'flex-start' ,
       paddingBottom:50 , 
       marginHorizontal:20
    } , 

    payContent : {
       backgroundColor:'#F66B0E',
       padding:10,
       width:'30%',
       marginHorizontal:10,
      textAlign:'center', 
      justifyContent:'center',
      alignItems:'center', 
    }
})