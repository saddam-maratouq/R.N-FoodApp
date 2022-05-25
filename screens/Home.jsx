import { StyleSheet, Text, View,Image 
  ,TouchableOpacity,TextInput ,
  Dimensions , FlatList
} from 'react-native'


import React , {useEffect, useState ,} from  'react'
//redux logic
import {useSelector , useDispatch} from 'react-redux'   
import { addItem } from '../redux/CartSlice';


//icon
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import FoodList from '../components/FoodList';


const Home = () => {
   
  const [result,SetReaslt] = useState([])  


  const navigation = useNavigation();

  const dispatch = useDispatch() 

  //state from redux 
  // const  {Cart} = useSelector(state => state ) 
  //   console.log(Cart) 


    //val = all item from Api
   const addHandler = (val) => {
     dispatch(addItem(val)) 
   }


  //Api 
  const  fethData = async () => {
    const url = "https://mocki.io/v1/f022a486-6df1-45be-8454-7b96a224cccc" 

    let res = await axios.get(url) 
    let foodData = res.data.foods 

    // console.log(foodData) 
    SetReaslt(foodData)
  }

    useEffect(() => { 
      fethData(); 
    }, []) 
    



  return (
    <View style={styles.HomeContainer} >
    {/* //header  */}
    <View style={styles.headerContent} > 

    <TouchableOpacity 
        onPress={() => navigation.openDrawer()}
     >
    <Feather name="menu" size={24} color="black" />
    </TouchableOpacity> 

      <Text style={{fontSize:23 ,   fontFamily:'Ruboto-bold' }} > Hello, joun  </Text> 
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
            style={{fontSize:18}}
         />
         <View style={styles.iconStyle} > 
         <FontAwesome name="search" size={25} color="black" /> 
         </View> 

    </View> 

    <FlatList 
      data={result}
      renderItem={ ( {item }) => (
          <FoodList addHandler={addHandler}  item={item}  />  
      ) }
      numColumns={2}  
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