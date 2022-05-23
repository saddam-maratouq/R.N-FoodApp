import { StyleSheet, Text, View , Image ,Dimensions } from 'react-native'
import React from 'react'

//icon 
import { FontAwesome } from '@expo/vector-icons';



const FoodList = ({item}) => { 

    //width for card 
    
    const {Images,Mealname,ingredients,price} = item 
    return (
    <View style={styles.card} > 
    <View style={{ alignItems:'center'}} > 
    <Image 
     source={{uri:Images}} 
     style={styles.FoodImage} 
     /> 
    </View> 
    <View style={styles.mealContent} >
     <Text style={styles.foodTitle} >{Mealname}</Text>
     <Text style={styles.foodsubTitle} >{ingredients}</Text>
     <View style={styles.priceCart} >
     <Text style={styles.price} >$ {price}</Text> 
     <FontAwesome name="plus-circle" size={25} color="#F66B0E" />
     </View>
     <View/>
    </View>


    </View>
  )
}

const cardWidth = Dimensions.get('screen').width /2 -35

export default FoodList

const styles = StyleSheet.create({
  
    card : {
        height:250,
        width:cardWidth,
        backgroundColor:'#fff',
        elevation:13,
        marginHorizontal:20,
        marginBottom:40,
        marginTop:100, 
        borderRadius:20
        
    },
   
    
    FoodImage : {
        width:150,
        height:150, 
        top :-80,
      
    },

    mealContent : {
        marginHorizontal:7,
        position:'absolute',
        top:100
    },
   
    foodTitle : {
        fontSize:22,
        fontWeight:'bold' 
    }, 
    foodsubTitle :{
        fontSize:18,
        color:'gray' ,
        marginTop:2,
        marginBottom:10,
    } ,
    price : {
        fontSize:19
    },
    priceCart : {
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center'
    }
})