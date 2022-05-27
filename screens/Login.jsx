import { StyleSheet, Text, View, TextInput, Dimensions,Button ,TouchableOpacity } from "react-native";


import React , {useState} from "react";

import { useNavigation } from '@react-navigation/native';

//icon
import { FontAwesome } from "@expo/vector-icons";

const Login = () => { 

    const [clicked,SetClicked ] = useState(true) 

     const navigation = useNavigation();


    const ClickedLogin = () => {
        SetClicked(!clicked) 
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000);
    }


    const ClickedLogout = () => { 
        SetClicked(!clicked) 
        setTimeout(() => {
            navigation.navigate('Main')
        }, 2000);
    }

  return (
    <View style={styles.container}>
      <View style={styles.TitleLogin}>
        <Text
          style={{
            fontFamily: "Ruboto-bold",
            fontSize: 35,
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </View>

      <View style={styles.InputContent}>


        <TextInput placeholder="user name" style={styles.userName} />

        <TextInput
          placeholder="password"
          style={styles.password}
          keyboardType='numbers-and-punctuation'
          secureTextEntry={true} 
          
        />
      </View> 

      {/* //ternery for login/logout */} 

         {  clicked ? 
         
          (
              <View style={ styles.butoonContent }  > 
             <TouchableOpacity style=
             {{ backgroundColor:'#F66B0E'}} 
             onPress={ClickedLogin}  
             > 
            
             <Text style={styles.log} > 
             Login 
             </Text>
             </TouchableOpacity>
           
            {/* color="#F66B0E"  */} 
            
             </View>

          )   
          :
          (
            <View style={ styles.butoonContent }  >
            <TouchableOpacity style={{ backgroundColor:'#F66B0E'}} 
             onPress={ClickedLogout} 
             > 
             <Text style={styles.log} > Logout</Text>
             </TouchableOpacity>
          </View>
          )
         
          } 

      

    </View>
  );
};

const width = Dimensions.get("screen").width;

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical:100,
  },

  TitleLogin: {
    // flex:1,
    justifyContent: "center",
    paddingTop: 50,
  },

  InputContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200,
  },
  userName: {
    borderWidth: 1,
    width: width - 40,
    padding: 20,
    borderColor: "gray",
    borderRadius: 10,
    fontSize: 20,
  },

  password: {
    borderWidth: 1,
    width: width - 40,
    marginTop: 50,
    padding: 20,
    borderColor: "gray",
    borderRadius: 10,
    fontSize: 20,
  },
  butoonContent : {
    //   justifyContent:'center',
    //   alignItems:'center',
   padding:30,
  width:width,
  position:'absolute',
  top:500,
  
//   height:200
  },
  log : {
    textAlign:'center' , 
    color:'#fff', 
    fontSize:20,
    padding:20 ,
    fontWeight:'bold',
   

  }
});
