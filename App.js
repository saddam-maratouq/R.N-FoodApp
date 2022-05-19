import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,TouchableOpacity,Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/images/Bergers.png')}
        style={styles.MainImage}
        resizeMode='contain'
      /> 
    
      <Text style={styles.Tilte} > Delcious food  </Text> 
    
      <Text style={styles.SubTilte} > we help you to find best and  </Text>
      <Text style={styles.SubTilte}>delicious food </Text> 


      <View style={styles.butoonContent}>
        <TouchableOpacity style={styles.butoon} >
          <Text style={{ textAlign:'center' , fontSize:18 , color:'#fff'}} > Get started  </Text>
        </TouchableOpacity>
      </View>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical:60, 
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
  },
  SubTilte : {
    fontSize:20,
    paddingVertical:0,
    color:'#333',

  }, 
  butoonContent : {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center', 
  },
  butoon : {
    backgroundColor:'#F66B0E',
    width:Dimensions.get('screen').width - 20,
    borderRadius:30,
    padding:20,
  },


});
