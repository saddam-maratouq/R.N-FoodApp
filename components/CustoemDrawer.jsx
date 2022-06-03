import { StyleSheet, Text, View , ImageBackground , Image } from 'react-native'
import React ,{useState,useEffect} from 'react'
import {DrawerContentScrollView ,DrawerItemList} from '@react-navigation/drawer'

//icons
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 


import {useSelector } from 'react-redux'   


const CustoemDrawer = (props) => {

  const nameState = useSelector(state => state.user.name)  

 //total show 
 const [ total , SetTotal] = useState()     
 const  cartItems  = useSelector(state => state.product.cartItem) 


  //calc total quantity 
  const  CalcTotal = () => {  
    const totals =  cartItems.reduce((acc,item) =>   acc + (item.price * item.itemQuantity)   , 0 )  
    SetTotal(totals) 
  } 
  // 
  
   useEffect(() => {
    CalcTotal();
   }, [cartItems]) 



  return (
    <View style={{ flex:1}} >
      <DrawerContentScrollView {...props} 
      contentContainerStyle={{backgroundColor:'#FF7700'}}
      
       >
       

       <ImageBackground   source={require('../assets/images/back.jpg') }  
       style={{ padding:30}}
       resizeMode='stretch'
        >

       {/* <Image source={require ('../assets/images/user-profile.jpg')} 
            style={{ width:80, height:80, marginBottom:10, borderRadius:40 , }} 
       />    */} 
       <FontAwesome name="user-circle" size={35} color="#fff" 
           style={{ marginBottom:10 }}
       />

       <Text style={styles.DrawerTitle} > {nameState} </Text> 
       <View style={styles.IconContent}>
       <FontAwesome5 name="dollar-sign" size={20} color="#fff" />
       <Text style={{ color:'#fff', marginRight:2 , fontSize:20}} > {total} </Text> 
       </View>

        </ImageBackground>  
          <View style={styles.Listcontent} >
            
          <DrawerItemList {...props} 
          
          / >
          </View> 
          
  
      </DrawerContentScrollView> 
    

    </View>
  )
}

export default CustoemDrawer

const styles = StyleSheet.create({
    DrawerTitle : {
        fontSize:22,
        color:'#fff',
       fontFamily:'Ruboto-bold',
       marginBottom:2
        
      
    },
    IconContent : {
        flexDirection:'row',
        alignItems:'center'
    },
    Listcontent : {
      backgroundColor:'#fff',
      paddingTop:10,
    }
}) 