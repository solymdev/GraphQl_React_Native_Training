import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CharacterInfo from "../MainScreen/screens/CharacterInfo"
import EpisodesInfo from "../MainScreen/screens/EpisodesInfo"
import SearchView from "./screens/SearchView"
import { MainScreenNavigator } from "flows/MainScreen/navigator/MainScreenNavigator"

const SearchStack = createNativeStackNavigator()

export const SearchNavigator = () => {
  return (
    <SearchStack.Navigator initialRouteName="Search View">
      <SearchStack.Screen
        name="Search View"
        component={SearchView}
        options={{
          headerLargeTitle: true,
        }}
      />
      <SearchStack.Screen name="Character" component={CharacterInfo} />
      <SearchStack.Screen name="Episode" component={EpisodesInfo} />
    </SearchStack.Navigator>
  )
}
