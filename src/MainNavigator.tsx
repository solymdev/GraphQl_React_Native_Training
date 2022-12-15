import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MainScreenNavigator } from "flows/MainScreen/navigator/MainScreenNavigator"

const Tab = createBottomTabNavigator()

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={MainScreenNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
