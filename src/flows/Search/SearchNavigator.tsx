import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CharacterInfo from "flows/MainScreen/screens/CharacterInfo"
import EpisodesInfo from "flows/MainScreen/screens/EpisodesInfo"
import SearchView from "./screens/SearchView"

const Stack = createNativeStackNavigator()

export const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search View"
        component={SearchView}
        options={{
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen name="Character" component={CharacterInfo} />
      <Stack.Screen name="Episode" component={EpisodesInfo} />
    </Stack.Navigator>
  )
}
