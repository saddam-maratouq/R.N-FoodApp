import { Text, View } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Main from "../screens/Main";

//icon
import { FontAwesome5 } from "@expo/vector-icons";
import Cart from "../screens/Cart";

//redux
import { useSelector, useDispatch } from "react-redux";

import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  //Cart from redux to show quantety in the tabBarBadge
  const cartItems = useSelector((state) => state.product.cartItem);

  const length = cartItems.length;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let Icons;

          if (route.name === "Home2") {
            Icons = "home";
            size = focused ? 30 : 25;
          } else if (route.name === "Main") {
            Icons = "heart";
            size = focused ? 30 : 25;
          } else if (route.name === "Cart") {
            Icons = "shopping-cart";
            size = focused ? 30 : 25;
            //  color = focused ? '#f0f' : '#555'
          }

          return <FontAwesome5 name={Icons} size={size} color={color} />;
        },
        //another way to control color with more options ...
        tabBarActiveTintColor: "#F66B0E",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff" },
        drawerLabelStyle: { fontSize: 16, fontWeight: "bold", marginLeft: -25 },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      {/* <Tab.Screen name="Main" component={Main} />  */}
      <Tab.Screen name="Home2" component={Home} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarBadge: length,
          tabBarBadgeStyle: {
            backgroundColor: "#F66B0E",
            tabBarStyle: { display: "none" },
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
