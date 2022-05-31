import { StyleSheet, Text, View, TextInput, 
  Dimensions,Button ,TouchableOpacity ,Alert ,ToastAndroid
} 
  from "react-native";

//  navigation 
  import { useNavigation } from '@react-navigation/native';
  
  //icon
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
  //redux -react
import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => { 

  const [name, setName] = useState('') 
  const [pass, setPass] = useState('') 

  
  

    const [clicked,SetClicked ] = useState(true) 

     const navigation = useNavigation();

     const dispatch = useDispatch() 


      // const resetApp = () => {
      //     setName('') 
      // }

    const ClickedLogin =  () => { 
      
      // logic for Alow login 
      if (name.length  >= 3 && pass.length > 4) {
        SetClicked(!clicked) 
        dispatch(addUser( {name} )) //warning must send name as obj    
        setTimeout(() => {
            navigation.navigate('Home') 
        }, 1000);
       
      }
      else{
        Alert.alert('Warning', 'your name or password must be longer',[
          {text : 'Dont show again'} ,
          {text : 'cancel'} ,
          {text : 'ok'} ,
        ]) 
       
      }
       
    }



    const ClickedLogout = () => { 
        SetClicked(!clicked) 
        setTimeout(() => {
            navigation.navigate('Main')
        }, 1000);
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
          register
        </Text>
      </View>

      <View style={styles.InputContent}>


        <TextInput 
        placeholder="user name" 
        style={styles.userName} 
        onChangeText={ (value) => setName(value)}
        maxLength={12}
        editable={true}
        />



        <TextInput
          placeholder="password (more than 4 !!)"
          style={styles.password}
          keyboardType='numbers-and-punctuation'
          secureTextEntry={true}   
        onChangeText={ (value) => setPass(value)} 
         maxLength={25}
        />
      </View> 

      {/* //ternery for login/logout */} 

         {  clicked ? 
         
          (
              <View style={ styles.butoonContent }  > 
             <TouchableOpacity 
             style= {{ backgroundColor:'#F66B0E'}} 
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
            <TouchableOpacity style={{ backgroundColor:'red'}} 
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

export default Login;


const width = Dimensions.get("screen").width;


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
   padding:30,
  width:width,
  position:'absolute',
  top:500,

  },
  
 

  log : {
    textAlign:'center' , 
    color:'#fff', 
    fontSize:20,
    padding:20 ,
    fontWeight:'bold',
  }
});
