import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"
import { MainScreenNavigator } from "flows/MainScreen/navigator/MainScreenNavigator"
import { SearchNavigator } from "flows/Search/SearchNavigator"

const Tab = createBottomTabNavigator()

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Wikipedia"
          component={MainScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="md-checkmark-circle"
                size={32}
                color={focused ? "blue" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="search"
                size={32}
                color={focused ? "blue" : "gray"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
