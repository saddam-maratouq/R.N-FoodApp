import React from "react";

//darwer
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//screens
import Main from "../screens/Main";
import TabNav from "./TabNav";
import Cart from "../screens/Cart";
import Login from "../screens/Login";
import CustoemDrawer from "../components/CustoemDrawer";

//icons
import { FontAwesome5 } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustoemDrawer {...props} />}
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let Icons;

            if (route.name === "Home") {
              Icons = "home";
              size = focused ? 25 : 20;
              //  color = focused ? '#f0f' : '#555'
            } else if (route.name === "Main") {
              Icons = "heart";
              size = focused ? 25 : 20;
              //  color = focused ? '#f0f' : '#555'
            } else if (route.name === "Cart") {
              Icons = "shopping-cart";
              size = focused ? 25 : 20;
              //  color = focused ? '#f0f' : '#555'
            } else if (route.name === "Login") {
              Icons = "user-check";
              size = focused ? 25 : 20;
              //  color = focused ? '#f0f' : '#555'
            }

            return <FontAwesome5 name={Icons} size={size} color={color} />;
          },
          //another way to control color with more options ...
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "gray",
          drawerActiveBackgroundColor: "#FF7700",
          BarStyle: { backgroundColor: "black" },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: -25,
          },
        })}
      >
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Home"
          component={TabNav}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;

// screenOptions={{headerShown:false}}
