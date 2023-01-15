import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"
import { MainScreenNavigator } from "./flows/MainScreen/navigator/MainScreenNavigator"
import { SearchNavigator } from "./flows/Search/navigator/SearchNavigator"
import { Size } from "utils/size"
import InformationView from "./flows/Information"

const Tab = createBottomTabNavigator()

const ICON_SIZE = Size(4)
const FOCUSED_COLOR = "blue"
const NOT_FOCUSED_COLOR = "gray"

enum ICON_NAMES {
  BOOK = "book-outline",
  SEARCH = "search",
  INFORMATION = "information-circle-outline",
}

const BookIcon = ({ focused }) => (
  <Ionicons
    name={ICON_NAMES.BOOK}
    size={ICON_SIZE}
    color={focused ? FOCUSED_COLOR : NOT_FOCUSED_COLOR}
  />
)

const SearchIcon = ({ focused }) => (
  <Ionicons
    name={ICON_NAMES.SEARCH}
    size={ICON_SIZE}
    color={focused ? FOCUSED_COLOR : NOT_FOCUSED_COLOR}
  />
)

const InfoIcon = ({ focused }) => (
  <Ionicons
    name={ICON_NAMES.INFORMATION}
    size={ICON_SIZE}
    color={focused ? FOCUSED_COLOR : NOT_FOCUSED_COLOR}
  />
)

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
          tabBarIcon: BookIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: SearchIcon,
        }}
      />
      <Tab.Screen
        name="Info"
        component={InformationView}
        options={{
          tabBarIcon: InfoIcon,
        }}
      />
    </Tab.Navigator>
  )
}
