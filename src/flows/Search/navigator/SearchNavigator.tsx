import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CharacterInfo from "../../MainScreen/screens/CharacterInfo"
import EpisodesInfo from "../../MainScreen/screens/EpisodesInfo"
import SearchView from "../screens/SearchView"

enum SEARCH_NAVIGATOR_ROUTES {
  SEARCH_VIEW = "Search View",
  CHARACTER = "Character",
  EPISODE = "Episode",
}

const SearchStack = createNativeStackNavigator()

export const SearchNavigator = () => {
  return (
    <SearchStack.Navigator
      initialRouteName={SEARCH_NAVIGATOR_ROUTES.SEARCH_VIEW}
    >
      <SearchStack.Screen
        name="Search View"
        component={SearchView}
        options={{
          headerLargeTitle: true,
        }}
      />
      <SearchStack.Screen
        name={SEARCH_NAVIGATOR_ROUTES.CHARACTER}
        component={CharacterInfo}
      />
      <SearchStack.Screen
        name={SEARCH_NAVIGATOR_ROUTES.EPISODE}
        component={EpisodesInfo}
      />
    </SearchStack.Navigator>
  )
}
