import { StyleSheet, Text, View,Image 
  ,TouchableOpacity,TextInput ,
  Dimensions , FlatList , ToastAndroid
} from 'react-native'


import React , {useEffect, useState ,} from  'react'
//redux logic
import {useSelector , useDispatch} from 'react-redux'   
import { addItem , deleteItem } from '../redux/CartSlice';


//icon
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import FoodList from '../components/FoodList';



const Home = () => {
   
  //state from redux to show name 
  const nameState = useSelector(state => state.user.name)  

  console.log(nameState) 
  

  const navigation = useNavigation();
  
  const [result,SetReaslt] = useState([])  

  const [clicked , SetClicked] = useState(true) 


  const dispatch = useDispatch() 


   

  
  
  //Api 
  const  fethData = async () => { 
    const url = "https://mocki.io/v1/c2244c77-db98-4571-8447-e34ec0178b95"  

    let res = await axios.get(url) 
    let foodData = res.data.foods 
    
    // console.log(foodData) 
    SetReaslt(foodData)
  }
        //bring data from Api when app rerender 
        useEffect(() => {  
          fethData(); 
        }, [])  
  
  


  //val = all item from Api , function to Add food to cart 
      const addHandler = async (val) => {
        dispatch(addItem(val)) 
        SetClicked(!clicked) 

        // ToastAndroid.show('successfully Added to the cart ', 
        // ToastAndroid.SHORT)  
      } 


      

     //function to remove food from Cart by Id 
     const deleteHandler = (id) => {
      dispatch(deleteItem(id))  
      // ToastAndroid.show(' Removed from cart ',  
      // ToastAndroid.SHORT)   
    } 

  


  

  return (
    <View style={styles.HomeContainer} >
    {/* header  */}
    <View style={styles.headerContent} > 

    <TouchableOpacity 
        onPress={() => navigation.openDrawer()}
     >
    <Feather name="menu" size={24} color="black" />
    </TouchableOpacity> 

      <Text style={{fontSize:23 ,   fontFamily:'Ruboto-bold' }} > Hello, {nameState}  </Text> 
      <TouchableOpacity  
        onPress={() => navigation.openDrawer()}
       > 
      <FontAwesome name="user-circle" size={35} color="gray" />  
      </TouchableOpacity>
    </View> 
    {/* search bar  */} 
    <View  style={styles.searchInput}> 
        <TextInput 
            placeholder='Are you hungry   ?'
            style={{fontSize:20}}
         />
         <View style={styles.iconStyle} > 
         <FontAwesome name="search" size={25} color="black" /> 
         </View> 
    </View> 
    {/* List for food from Api  */} 
    <FlatList 
      data={result}
      renderItem={ ( {item }) => (
          <FoodList 
          clicked={clicked} 
           addHandler={addHandler} 
           deleteHandler={deleteHandler} 
            item={item}  />  
      ) }
      numColumns={2}  
      showsVerticalScrollIndicator={false}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
    />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    HomeContainer : {
        flex:1,
       
    },
    headerContent : { 
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:90,
        alignItems:'center', 
    },
    searchInput : { 
        paddingHorizontal:20,
        flexDirection:'row',
        borderWidth:1,
       width:Dimensions.get('screen').width -30, 
        fontSize:30,
        borderColor:'#EFEAD8',
        borderRadius:30, 
        padding:11,
        marginHorizontal:20,
        justifyContent:'space-between',  
        backgroundColor:'#FCFFE7' ,
        elevation:13
    },
    iconStyle : {
        backgroundColor:'#F66B0E',
        height:51,
        width:100,
        borderRadius:22,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute', 
        right:0
    }
})