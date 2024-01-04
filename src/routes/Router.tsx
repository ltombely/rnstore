import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { ThemeContext } from "styled-components";
import AboutUs from "../screens/AboutUs";
import Products from "../screens/Products";
const Drawer = createDrawerNavigator()


export default function Router(){

  const appTheme = useContext(ThemeContext)
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: appTheme!.colors.background
        
      },
      drawerInactiveTintColor: appTheme!.colors.text,
      drawerActiveTintColor: appTheme!.colors.primary,
      drawerActiveBackgroundColor: appTheme!.colors.selected
    }}>
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='Products' component={Products} />
      <Drawer.Screen name='About Us' component={AboutUs}/>
    </Drawer.Navigator>
  )
}