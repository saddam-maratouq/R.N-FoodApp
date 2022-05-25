import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CartItem = ({items}) => {

  const {Images,price , Mealname, ingredients }  = items 
  return (
    <View style={styles.CartContainer} >
     <Image 
     source={{uri:Images}} 
     style={styles.FoodImage} 
     /> 
      <Text> {Mealname} </Text> 
      <Text> {price} </Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    CartContainer : {
       justifyContent:'space-between',
       flexDirection:'row',
        alignItems:'center'
    },

    FoodImage : {
        width:100,
        height:100,
    }

})