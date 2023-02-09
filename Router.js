

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import { Home } from "./src/pages/home/Home";
import { Search } from "./src/pages/search/Search";
import { Login } from "./src/pages/login/Login";
import { Register } from "./src/pages/register/Register";



const Stack = createNativeStackNavigator();



export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
 
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerShadowVisible: true,
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: "Search",
            // headerTransparent: true,
            headerShadowVisible: true,
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            // headerTransparent: true,
            headerShadowVisible: true,
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Register",
            // headerTransparent: true,
            headerShadowVisible: true,
            headerBackVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}