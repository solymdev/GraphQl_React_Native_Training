import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"
import { MainScreenNavigator } from "./flows/MainScreen/navigator/MainScreenNavigator"
import { SearchNavigator } from "./flows/Search/SearchNavigator"
import InformationView from "./flows/Information"

const Tab = createBottomTabNavigator()

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Wikipedia"
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="Wikipedia"
        component={MainScreenNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="book-outline"
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
      <Tab.Screen
        name="Info"
        component={InformationView}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="information-circle-outline"
              size={32}
              color={focused ? "blue" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
