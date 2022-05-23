import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,TouchableOpacity,Dimensions } from 'react-native';
import MainRoute from './routes/MainRoute';
import { useFonts } from "expo-font"; 




export default function App() {

  const [loaded] = useFonts({
    "Ruboto-regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
    "Ruboto-bold": require("./assets/fonts/RobotoSlab-Bold.ttf"),
  }); 



  if (!loaded) {
    return null;
  }

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
