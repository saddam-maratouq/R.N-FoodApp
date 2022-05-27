import { StyleSheet, Text, View , Image ,Dimensions , TouchableOpacity } from 'react-native'
import React from 'react'

//icon 
import { FontAwesome } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';





const FoodList = ({item  , addHandler , clicked , deleteHandler }) => { 

  
    
    const {Images,Mealname,ingredients,price,id , } = item 

    // console.log({id})  

     const clickedId = id 


      
   

    return (
    <View style={styles.card} > 
    <View style={{ alignItems:'center'}} >  
    <Image 
     source={{uri:Images}} 
     style={styles.FoodImage} 
     resizeMode='contain' 
     /> 
    </View> 
    <View style={styles.mealContent} >
     <Text style={styles.foodTitle} >{Mealname}</Text>
     <Text style={styles.foodsubTitle} >{ingredients}</Text>
     <View style={styles.priceCart} >
     <Text style={styles.price} >$ {price}</Text> 

         
     <TouchableOpacity  onPress={ () => addHandler (item)} > 
    
     {/* <FontAwesome name="plus-circle" size={23} color="#F66B0E" /> */}
     <FontAwesome name="cart-arrow-down" size={30} color="#F66B0E" />
     </TouchableOpacity> 

  
        <TouchableOpacity  onPress={ () => deleteHandler (clickedId)} >  
    
        <FontAwesome name="remove" size={22} color="#F66B0E" />     
        
    </TouchableOpacity> 
   
    
    
   
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
        marginHorizontal:10, 
        position:'absolute',
        top:100
    },
   
    foodTitle : {
        fontSize:22,
        // fontWeight:'bold' 
        fontFamily:"Ruboto-bold" ,
        marginBottom:4
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