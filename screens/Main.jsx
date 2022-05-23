import React  from 'react'
import { StyleSheet, Text, View ,Image ,TouchableOpacity,Dimensions } from 'react-native';
// to navigate screen by click 
import { useNavigation } from '@react-navigation/native';


const Main = () => {  
  const navigation = useNavigation();

  return (
     <View style={styles.container} > 
    <Image 
    source={require('../assets/images/Bergers.png')}
    style={styles.MainImage}
    resizeMode='contain'
  /> 

  <Text style={styles.Tilte} > Delicious food  </Text> 

  <Text style={styles.SubTilte} > we help you to find best and delicious </Text>
  <Text style={styles.SubTilte}> food</Text> 


  <View style={styles.butoonContent}>
    <TouchableOpacity 
    onPress={() => navigation.navigate('Home') }
     style={styles.butoon} >
      <Text style={{ textAlign:'center' , fontSize:18 , color:'#fff'}} > Get started  </Text>
    </TouchableOpacity> 
  </View> 
  </View>
  ) 
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical:90, 
  },
    MainImage : {
        width:300,
        height:300, 
     },
     TitleContent : {
       
     },
     Tilte : {
       fontSize:40,
       paddingVertical:30,
       fontWeight:'bold'
     },
     SubTilte : {
       fontSize:20,
       paddingVertical:0,
       color:'gray',
   
     }, 
     butoonContent : {
       flex:1,
       justifyContent:'flex-end',
       alignItems:'center', 
      },
      butoon : {
        backgroundColor:'#F66B0E',
        width:Dimensions.get('screen').width - 40,
       borderRadius:30,
       padding:20,
     },
})