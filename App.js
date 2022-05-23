import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,TouchableOpacity,Dimensions } from 'react-native';
import MainRoute from './routes/MainRoute';



export default function App() {
  return (
    
    <> 
   <MainRoute/>   
    </>
    
    
   
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
 


});
