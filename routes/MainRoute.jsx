import React from "react";

//darwer
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//screens
import Main from "../screens/Main";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}} >
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
   
  );
};

export default MainRoute;